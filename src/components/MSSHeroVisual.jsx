import {
  Canvas,
  useFrame,
  useLoader,
} from "@react-three/fiber";

import {
  useEffect,
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";

import aiImage from "../../assets/images/ai&automation.png";
import cloudImage from "../../assets/images/cloud&devops.png";
import softwareImage from "../../assets/images/software.png";
import backendapi  from "../../assets/images/backendapi.png";
import uiuxImage from "../../assets/images/uiux.png";
import dataImage from "../../assets/images/data.png";
import digitalgrowth from "../../assets/images/digitalgrowth.png";

const CARDS = [
  aiImage,
  cloudImage,
  softwareImage,
  backendapi,
  uiuxImage,
  dataImage,
  digitalgrowth,
];

/* =========================================================
   SERVICE GLASS CARD
========================================================= */

function Card({
  image,
  index,
  total,
}) {
  const texture = useLoader(
    THREE.TextureLoader,
    image
  );

  texture.colorSpace =
    THREE.SRGBColorSpace;

  texture.anisotropy = 16;

  const radius = 2.35;

  const angle =
    (index / total) *
    Math.PI *
    2;

  const x =
    Math.sin(angle) * radius;

  const z =
    Math.cos(angle) * radius;

  return (
    <group
      position={[x, 0, z]}
      rotation={[0, angle, 0]}
    >
      {/* GLASS BACK */}

      <mesh position={[0, 0, -0.035]}>
        <planeGeometry
          args={[1.52, 2.08]}
        />

        <meshPhysicalMaterial
          color="#EAF3EA"
          transparent
          opacity={0.18}
          roughness={0.08}
          transmission={0.75}
          thickness={0.4}
          ior={1.35}
          clearcoat={1}
          clearcoatRoughness={0.04}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* IMAGE */}

      <mesh position={[0, 0, 0]}>
        <planeGeometry
          args={[1.42, 1.99]}
        />

        <meshBasicMaterial
          map={texture}
          transparent
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* FRONT GLASS */}

      <mesh position={[0, 0, 0.025]}>
        <planeGeometry
          args={[1.44, 2.01]}
        />

        <meshPhysicalMaterial
          color="#FFFFFF"
          transparent
          opacity={0.055}
          roughness={0.025}
          transmission={0.92}
          thickness={0.12}
          ior={1.4}
          clearcoat={1}
          clearcoatRoughness={0.02}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* GLASS HIGHLIGHT */}

      <mesh
        position={[
          -0.25,
          0.75,
          0.05,
        ]}
        rotation={[
          0,
          0,
          -0.15,
        ]}
      >
        <planeGeometry
          args={[0.7, 0.1]}
        />

        <meshBasicMaterial
          color="#FFFFFF"
          transparent
          opacity={0.1}
          blending={
            THREE.AdditiveBlending
          }
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   LIQUID GLASS RIBBON
========================================================= */

function Ribbon() {
  const geometry = useMemo(() => {
    const points = [];

    for (
      let i = 0;
      i <= 220;
      i++
    ) {
      const t =
        (i / 220) *
        Math.PI *
        2;

      const radius = 2.45;

      points.push(
        new THREE.Vector3(
          Math.sin(t) * radius,
          Math.sin(t * 2) * 0.3,
          Math.cos(t) * radius
        )
      );
    }

    const curve =
      new THREE.CatmullRomCurve3(
        points,
        true
      );

    return new THREE.TubeGeometry(
      curve,
      240,
      0.03,
      14,
      true
    );
  }, []);

  return (
    <mesh geometry={geometry}>
      <meshPhysicalMaterial
        color="#6FA66D"
        transparent
        opacity={0.62}
        roughness={0.045}
        metalness={0}
        transmission={0.62}
        thickness={0.36}
        ior={1.4}
        clearcoat={1}
        clearcoatRoughness={0.02}
        emissive="#4D8B4F"
        emissiveIntensity={0.045}
      />
    </mesh>
  );
}

/* =========================================================
   SCENE
========================================================= */

function Scene() {
  const group = useRef();

  const targetRotation =
    useRef(-0.6);

  const currentRotation =
    useRef(-0.6);

  const mouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (
      event
    ) => {
      const normalizedX =
        (event.clientX /
          window.innerWidth) *
          2 -
        1;

      const normalizedY =
        (event.clientY /
          window.innerHeight) *
          2 -
        1;

      mouseY.current =
        normalizedY;

      targetRotation.current =
        -0.6 +
        normalizedX * 2.5;
    };

    const handleWheel = (
      event
    ) => {
      targetRotation.current +=
        event.deltaY * 0.0006;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "wheel",
        handleWheel
      );
    };
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;

    currentRotation.current =
      THREE.MathUtils.lerp(
        currentRotation.current,
        targetRotation.current,
        0.055
      );

    group.current.rotation.y =
      currentRotation.current;

    group.current.rotation.x =
      THREE.MathUtils.lerp(
        group.current.rotation.x,
        mouseY.current * 0.05,
        0.035
      );

    group.current.position.y =
      Math.sin(
        clock.elapsedTime * 0.7
      ) * 0.04;

    group.current.position.x =
      Math.cos(
        clock.elapsedTime * 0.45
      ) * 0.02;
  });

  return (
    <group
  ref={group}
  scale={[0.88, 0.88, 0.88]}
      rotation={[
        0.04,
        -0.6,
        -0.025,
      ]}
    >
      <Ribbon />

      {CARDS.map(
        (image, index) => (
          <Card
            key={image}
            image={image}
            index={index}
            total={CARDS.length}
          />
        )
      )}
    </group>
  );
}

/* =========================================================
   MSS HERO VISUAL
========================================================= */

export default function MSSHeroVisual() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0

        h-full
        w-full

        overflow-hidden
      "
    >
      <Canvas
     camera={{
  position: [0, 0, 6.2],
  fov: 40,
}}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
      >
        <ambientLight intensity={1.8} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2.7}
        />

        <directionalLight
          position={[-5, 2, 3]}
          intensity={1.4}
        />

        <pointLight
          position={[0, 2, 4]}
          intensity={1.5}
          color="#ffffff"
        />

        <pointLight
          position={[-2, 1, 3]}
          intensity={0.45}
          color="#A7D98E"
        />

        <pointLight
          position={[2, -1, 3]}
          intensity={0.3}
          color="#D59A7A"
        />

        <Scene />
      </Canvas>
    </div>
  );
}