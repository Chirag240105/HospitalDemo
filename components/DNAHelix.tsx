"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DNAHelix() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const helix = new THREE.Group();
    scene.add(helix);

    const cyan = new THREE.Color("#3DD6F5");
    const navy = new THREE.Color("#0A2463");
    const sphereGeometry = new THREE.SphereGeometry(0.09, 18, 18);
    const cyanMaterial = new THREE.MeshStandardMaterial({ color: cyan, emissive: cyan, emissiveIntensity: 1.35, roughness: 0.25 });
    const whiteMaterial = new THREE.MeshStandardMaterial({ color: "#ffffff", emissive: "#87efff", emissiveIntensity: 0.45, roughness: 0.35 });
    const strandMaterial = new THREE.MeshStandardMaterial({ color: "#B9F5FF", emissive: "#3DD6F5", emissiveIntensity: 0.55, roughness: 0.2 });

    const meshes: THREE.Object3D[] = [];
    const turns = 4.5;
    const points = 72;
    const height = 6.4;
    const radius = 1.28;

    for (let i = 0; i < points; i += 1) {
      const t = i / (points - 1);
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;
      const p1 = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      const p2 = new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius);

      const ballA = new THREE.Mesh(sphereGeometry, i % 2 ? cyanMaterial : whiteMaterial);
      ballA.position.copy(p1);
      const ballB = new THREE.Mesh(sphereGeometry, i % 2 ? whiteMaterial : cyanMaterial);
      ballB.position.copy(p2);
      helix.add(ballA, ballB);
      meshes.push(ballA, ballB);

      const rungCurve = new THREE.LineCurve3(p1, p2);
      const rung = new THREE.Mesh(new THREE.TubeGeometry(rungCurve, 1, 0.015, 8), strandMaterial);
      helix.add(rung);
      meshes.push(rung);
    }

    const strandA: THREE.Vector3[] = [];
    const strandB: THREE.Vector3[] = [];
    for (let i = 0; i < points; i += 1) {
      const t = i / (points - 1);
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;
      strandA.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
      strandB.push(new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius));
    }
    const tubeA = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(strandA), 180, 0.025, 12), strandMaterial);
    const tubeB = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(strandB), 180, 0.025, 12), strandMaterial);
    helix.add(tubeA, tubeB);
    meshes.push(tubeA, tubeB);

    const capsuleGroup = new THREE.Group();
    scene.add(capsuleGroup);
    const capsuleMaterial = new THREE.MeshStandardMaterial({ color: navy, emissive: "#12378a", emissiveIntensity: 0.25, roughness: 0.3 });
    for (let i = 0; i < 9; i += 1) {
      const capsule = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.45, 6, 14), capsuleMaterial);
      capsule.position.set((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 5, -1.8 - Math.random() * 2);
      capsule.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      capsuleGroup.add(capsule);
      meshes.push(capsule);
    }

    scene.add(new THREE.AmbientLight("#ffffff", 0.72));
    const key = new THREE.PointLight("#3DD6F5", 12, 18);
    key.position.set(-2.5, 2.5, 4);
    scene.add(key);
    const rim = new THREE.PointLight("#ffffff", 5, 14);
    rim.position.set(3, -2, 5);
    scene.add(rim);

    const mouse = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    mount.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);

    let frame = 0;
    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      if (!prefersReducedMotion) {
        helix.rotation.y += 0.006;
        helix.rotation.x += (mouse.y * 0.22 - helix.rotation.x) * 0.04;
        helix.position.x += (mouse.x * 0.25 - helix.position.x) * 0.04;
        capsuleGroup.children.forEach((child, index) => {
          child.rotation.x += 0.002 + index * 0.0001;
          child.rotation.y += 0.004;
          child.position.y += Math.sin(Date.now() * 0.001 + index) * 0.0008;
        });
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      mount.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      meshes.forEach((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-[300px] w-full sm:h-[460px] lg:h-[660px]" aria-label="Rotating cyan DNA helix" />;
}
