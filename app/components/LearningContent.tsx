'use client';

import { useState } from 'react';

function Accordion({title,children,defaultOpen=false}:{title:string;children:React.ReactNode;defaultOpen?:boolean}) {
  const [open,setOpen] = useState(defaultOpen);
  return <section className="learn-accordion">
    <button className="learn-accordion-trigger" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>
      <span>{title}</span><span aria-hidden="true">{open?'−':'+'}</span>
    </button>
    {open&&<div className="learn-accordion-body">{children}</div>}
  </section>;
}
function Equation({children}:{children:React.ReactNode}) { return <div className="learn-equation">{children}</div>; }
function KeyPoint({title,children}:{title:string;children:React.ReactNode}) {
  return <div className="learn-keypoint"><b>{title}</b><p>{children}</p></div>;
}

export function Theory1D() {
 return <div className="learning-content">
  <div className="learn-intro"><span className="learn-kicker">LEARNING MODULE · 1D QUANTUM SYSTEM</span>
   <h2>Understanding the one-dimensional particle in a box</h2>
   <p>Imagine a tiny particle that can move only along a straight line. Two perfectly rigid walls confine it to a region of length <i>L</i>. Quantum mechanics permits only particular standing-wave patterns and energies.</p>
  </div>
  <Accordion title="1. Physical model: what is inside and outside the box?" defaultOpen>
   <p>The ideal infinite potential well has zero potential energy inside the box and infinitely large potential energy outside. The particle is free inside, but it cannot be found outside.</p>
   <Equation>V(x) = 0 for 0 &lt; x &lt; L; &nbsp; V(x) = ∞ outside</Equation>
   <div className="learn-diagram" role="img" aria-label="Potential well with infinitely high walls">
    <svg viewBox="0 0 620 210"><path d="M65 25V170H555V25" fill="none" stroke="#315ee8" strokeWidth="5"/><path d="M65 170H555" stroke="#64748b" strokeWidth="1.5"/><path d="M65 170V18M555 170V18" stroke="#315ee8" strokeWidth="2" strokeDasharray="5 4"/><text x="310" y="105" fill="#315ee8" textAnchor="middle" fontSize="17" fontWeight="bold">V(x) = 0</text><text x="40" y="18" fill="#334155" fontSize="13">V</text><text x="64" y="190" fill="#334155" fontSize="13" textAnchor="middle">0</text><text x="555" y="190" fill="#334155" fontSize="13" textAnchor="middle">L</text><text x="310" y="207" fill="#64748b" fontSize="12" textAnchor="middle">Position x</text><text x="85" y="18" fill="#315ee8" fontSize="12">Infinite wall</text><text x="535" y="18" fill="#315ee8" fontSize="12" textAnchor="end">Infinite wall</text></svg>
   </div>
   <p className="learn-note"><b>Model limitation:</b> Real nanostructures generally have finite barriers. The infinite well is an ideal introductory model.</p>
  </Accordion>
  <Accordion title="2. Boundary conditions and energy quantization">
   <p>At an infinitely high wall, the wavefunction is zero. Therefore:</p><Equation>ψ(0) = 0 &nbsp; and &nbsp; ψ(L) = 0</Equation>
   <p>Only standing waves that fit between both boundaries satisfy these conditions. Allowed states are labelled by positive integers n = 1, 2, 3, …, giving discrete energy values.</p>
   <ul><li><b>n = 1:</b> ground state, the lowest allowed energy.</li><li><b>n = 2, 3, …:</b> excited states with increasingly many wave lobes.</li><li><b>n = 0 is not allowed:</b> it would give a zero wavefunction everywhere, which cannot describe a normalized particle.</li></ul>
  </Accordion>
  <Accordion title="3. Solving the Schrödinger equation">
   <p>Inside the box, V = 0, so the time-independent Schrödinger equation becomes:</p><Equation>−(ℏ²/2m)(d²ψ/dx²) = Eψ</Equation>
   <p>Applying the boundary conditions gives the normalized eigenfunction and energy:</p><Equation>ψₙ(x) = √(2/L) sin(nπx/L)</Equation><Equation>Eₙ = n²h²/(8mL²), &nbsp; n = 1, 2, 3, …</Equation>
   <p><b>Symbols:</b> h is Planck’s constant, ℏ = h/2π, m is particle mass, L is box length, and n is the quantum number.</p>
   <KeyPoint title="Why are the energies quantized?">The wave must have nodes at both walls. Only an integer number of half-wavelengths fits inside the box: L = nλ/2.</KeyPoint>
  </Accordion>
  <Accordion title="4. Probability density, normalization and nodes">
   <Equation>|ψₙ(x)|² = (2/L) sin²(nπx/L)</Equation>
   <p>The wavefunction ψ can be positive or negative; its sign is not itself a probability. The square modulus |ψ|² is non-negative and gives probability per unit length.</p>
   <Equation>Probability between a and b = ∫ₐᵇ |ψₙ(x)|² dx</Equation>
   <Equation>∫₀ᴸ |ψₙ(x)|² dx = 1</Equation>
   <p>An internal node is a point inside the box where ψ = 0. The nth state has n − 1 internal nodes. The boundaries are also zero points, but are not counted as internal nodes.</p>
  </Accordion>
  <Accordion title="5. de Broglie wavelength and physical interpretation">
   <Equation>λ = 2L/n</Equation>
   <p>The confined particle behaves like a standing matter wave. Increasing n shortens the wavelength. This is consistent with the relation p = h/λ: higher quantum states have larger momentum magnitude.</p>
  </Accordion>
  <Accordion title="6. How energy changes when parameters change">
   <div className="learn-grid"><KeyPoint title="Quantum number n">Energy increases as n². Doubling n makes the energy four times larger.</KeyPoint><KeyPoint title="Box length L">Energy decreases as 1/L². Doubling L reduces the energy to one-quarter.</KeyPoint><KeyPoint title="Particle mass m">Energy decreases as 1/m. Doubling the mass halves the energy.</KeyPoint></div>
   <p>The ground-state energy is positive, even at absolute zero. This is the zero-point energy of the confined particle.</p>
  </Accordion>
  <Accordion title="7. Worked numerical example">
   <p><b>Problem:</b> Calculate the ground-state energy of an electron in a 0.20 nm infinite one-dimensional box.</p>
   <p><b>Given:</b> n = 1; L = 0.20 × 10⁻⁹ m; m = 9.109 × 10⁻³¹ kg; h = 6.626 × 10⁻³⁴ J s.</p>
   <Equation>E₁ = h²/(8mL²)</Equation>
   <Equation>E₁ = 6.626² × 10⁻⁶⁸ / [8 × 9.109 × 10⁻³¹ × (0.20 × 10⁻⁹)²]</Equation>
   <p>Convert joules to electronvolts using 1 eV = 1.602176634 × 10⁻¹⁹ J.</p>
   <KeyPoint title="Result">E₁ ≈ 9.40 eV. This is the energy for an electron with mass equal to the electron mass and a box length of 0.20 nm.</KeyPoint>
  </Accordion>
  <div className="learn-summary"><b>Check your understanding</b><p>Can you explain why n begins at 1, why the ground-state energy is non-zero, and why the nth state has n − 1 internal nodes? Use the 1D simulator to test each statement.</p></div>
 </div>;
}

export function Theory3D() {
 return <div className="learning-content">
  <div className="learn-intro"><span className="learn-kicker">LEARNING MODULE · 3D QUANTUM SYSTEM</span>
   <h2>Understanding the three-dimensional particle in a box</h2>
   <p>In three dimensions, a particle is confined inside a rectangular region. It can move along x, y and z, so three quantum numbers are needed to specify its stationary state.</p>
  </div>
  <Accordion title="1. The three-dimensional physical model" defaultOpen>
   <p>The rectangular box has side lengths Lₓ, Lᵧ and L𝓏. Inside the box the potential is zero; outside it is infinitely high.</p>
   <Equation>V(x,y,z) = 0 inside; &nbsp; V = ∞ outside</Equation>
   <div className="learn-diagram"><svg viewBox="0 0 620 270" role="img" aria-label="Rectangular box with x y and z axes"><path d="M155 92L370 92L470 38L255 38Z M155 92V222L370 222V92 M370 92L470 38V168L370 222 M155 222L255 168L470 168" fill="#eaf0ff" fillOpacity=".7" stroke="#315ee8" strokeWidth="2.5"/><path d="M155 222L95 245M155 222L155 25M155 222L390 245" stroke="#334155" strokeWidth="2"/><text x="76" y="251" fill="#334155" fontSize="14">x</text><text x="147" y="19" fill="#334155" fontSize="14">z</text><text x="397" y="251" fill="#334155" fontSize="14">y</text><text x="270" y="145" fill="#315ee8" fontSize="14" textAnchor="middle">Confined region</text><text x="265" y="87" fill="#315ee8" fontSize="12">Lᵧ</text><text x="386" y="53" fill="#315ee8" fontSize="12">Lₓ</text><text x="380" y="179" fill="#315ee8" fontSize="12">L𝓏</text></svg></div>
   <p>For a cube, Lₓ = Lᵧ = L𝓏 = L. A rectangular box can have three different side lengths.</p>
  </Accordion>
  <Accordion title="2. Three quantum numbers and boundary conditions">
   <p>The state is identified by three positive integers:</p><Equation>(nₓ, nᵧ, n𝓏), &nbsp; where each nᵢ = 1, 2, 3, …</Equation>
   <p>The wavefunction must vanish at every wall: x = 0 or Lₓ, y = 0 or Lᵧ, and z = 0 or L𝓏. Each direction has its own standing-wave pattern.</p>
  </Accordion>
  <Accordion title="3. Three-dimensional wavefunction">
   <Equation>ψ(x,y,z) = √[8/(LₓLᵧL𝓏)] sin(nₓπx/Lₓ) sin(nᵧπy/Lᵧ) sin(n𝓏πz/L𝓏)</Equation>
   <p>This is a product of three one-dimensional standing-wave functions. The normalization factor ensures that the total probability throughout the box is one.</p>
   <Equation>∭box |ψ(x,y,z)|² dV = 1</Equation>
  </Accordion>
  <Accordion title="4. Energy of a particle in a rectangular box">
   <Equation>E = (h²/8m)[nₓ²/Lₓ² + nᵧ²/Lᵧ² + n𝓏²/L𝓏²]</Equation>
   <p>The total energy is the sum of the three independent kinetic-energy contributions. For a cubic box:</p>
   <Equation>E = (h²/8mL²)(nₓ² + nᵧ² + n𝓏²)</Equation>
   <p>Unlike 1D, there are three quantum numbers. Changing any one of them changes the corresponding directional contribution to the total energy.</p>
  </Accordion>
  <Accordion title="5. Probability density and nodal planes">
   <Equation>P(x,y,z) = |ψ(x,y,z)|²</Equation>
   <p>The probability density describes how the likelihood of finding the particle varies throughout the volume. A nodal plane is a plane where the wavefunction is zero.</p>
   <p>For each direction, nₓ − 1, nᵧ − 1 and n𝓏 − 1 internal nodal planes occur. The total number of internal nodal planes is their sum for this separable rectangular-box eigenfunction.</p>
   <p>A central 2D slice is only a cross-section of this 3D density. It is not a full volume rendering. Rotating a 3D display or viewing several slices helps reveal the spatial structure.</p>
  </Accordion>
  <Accordion title="6. Degeneracy in a cubic box">
   <p>In a cubic box, the energy depends on the sum nₓ² + nᵧ² + n𝓏². Different states can have the same sum and therefore the same energy. This is called degeneracy.</p>
   <KeyPoint title="Example: threefold degeneracy">The states (1,1,2), (1,2,1) and (2,1,1) all have energy factor 1² + 1² + 2² = 6. They have equal energy in an ideal cubic box, although their spatial patterns are oriented differently.</KeyPoint>
   <p>In a non-cubic rectangular box, these states need not have equal energies because the side lengths are different.</p>
  </Accordion>
  <Accordion title="7. Worked numerical example">
   <p><b>Problem:</b> Find the energy of an electron in a cubic box of side 0.20 nm in state (1,1,1).</p>
   <Equation>E = h²/(8mL²) × (1² + 1² + 1²)</Equation>
   <p>The one-dimensional ground-state energy for these values is approximately 9.40 eV. There are three equal directional contributions.</p>
   <KeyPoint title="Result">E₁₁₁ ≈ 3 × 9.40 = 28.20 eV.</KeyPoint>
  </Accordion>
  <Accordion title="8. Compare 1D and 3D models">
   <div className="learn-table-wrap"><table className="learn-table"><thead><tr><th>Feature</th><th>1D box</th><th>3D box</th></tr></thead><tbody><tr><td>Coordinates</td><td>x</td><td>x, y, z</td></tr><tr><td>Quantum numbers</td><td>n</td><td>nₓ, nᵧ, n𝓏</td></tr><tr><td>Energy</td><td>One contribution</td><td>Sum of three contributions</td></tr><tr><td>Nodes</td><td>Points</td><td>Nodal planes</td></tr><tr><td>Probability</td><td>Probability per unit length</td><td>Probability per unit volume</td></tr></tbody></table></div>
  </Accordion>
  <div className="learn-summary"><b>Check your understanding</b><p>Use the 3D simulator to compare (1,1,1), (1,1,2), (1,2,1) and (2,1,1). In a cube, explain why these last three states share an energy but have differently oriented nodal patterns.</p></div>
 </div>;
}
