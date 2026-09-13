# iOS translation progress

next_step: 3A

completed:
  - A1
  - A2
  - A3
  - A4
  - B1
  - B2
  - B3
  - C1
  - C2
  - D1
  - D2
  - 1A
  - 1B
  - 1C
  - 1D
  - 1E
  - 1F
  - 2A
  - 2B
  - 2C
  - 2D
  - 2E
  - 2F

session_order: A1 A2 A3 A4 B1 B2 B3 C1 C2 D1 D2 1A 1B 1C 1D 1E 1F 2A 2B 2C 2D 2E 2F 3A 3B 3C 3D 3E 3F 3G 3H 4A 4B 4C 4D 4E 4F 4G 5A 5B 5C 5D 5E 5F 6.1 6.2 6.3 6.4 6.5 6.6 6.7 6.8 6.9 6.10 6.11 6H 7A 7B 7C 7D 7E 7F 7G 7H 8A 8B 8C 8D 8E 8F 8H 9A 9B 9C 9D 9E 9F 9H F1 F2 F3 F4 F5

notes:
  - A1: wrote prompt, plan copy, progress, PLATFORM_MAP.md; gitignore blocks an in-repo LiquidGlassLab-iOS
  - A2: rewrote README, CURRENT_STATE, NEW_CHAT_PROMPT to iOS (SwiftUI/MSL, iPhone 16 Pro).
    Learner progress is 40/216 through 9.6; live checkpoint is 1.3; frontier stays 9.10. Did not restore 95/216.
  - A3: renamed curriculum + handoff to liquid_glass_ios_*; swapped platform nouns/APIs;
    progress is 40/216, checkpoint 1.3, must-re-read Ch 1/2/6/7/8 and 9.7–9.9. curriculum/ grep is clean.
  - A4: USER_PREFERENCES.md — Xcode #Preview / Swift / iPhone 16 Pro; lab path LiquidGlassLab-iOS;
    explanation-calibration and visualization-target rules left in place. Step-file leftover grep is clean.
  - B1: AGENTS.md through Chapter 3 terminology — iOS/Xcode, no ios/ or android/ dir;
    browser vs iOS; Swift target path; SwiftUI Color / straight-RGBA over. B1-slice grep is clean.
  - B2: AGENTS.md beginner/formula gates through Ch 7 — Kotlin→Swift; Compose preview →
    Xcode #Preview (light then dark, 412×915, scrollable). B2-slice grep is clean; 9.x/delivery left for B3.
  - B3: AGENTS.md delivery + 9.x rules — ZIP path LiquidGlassLab-iOS; AGSL→MSL;
    RuntimeShader→RuntimeMetalShader. Teaching rules kept; leftover grep is the origin line only.
  - C1: created /Users/rosen/Code/LiquidGlassLab-iOS — Xcode 16 synchronized-root SwiftUI
    app (iOS 17, com.example.liquidglasslab), LabHost 1–9, theme, 1.3 baseline. Grep clean. No Xcode.app so Simulator was not run.
  - C2: originally RuntimeMetalShader; replaced with LabOrange.metal +
    ShaderLibrary colorEffect. Runtime compiler deleted. No Simulator.
  - D1: course/glossary.html — platform terms to iOS/SwiftUI/MSL; added
    ShaderLibrary, .metal, points, scale, ShaderRect. Stable ids kept.
  - D2: liquid-glass-course.html — iOS/SwiftUI/Metal, lab path LiquidGlassLab-iOS,
    Ch 6/8 titles, 40/216 checkpoint 1.3. tools/README browser-only. Leftover grep is filenames only.
  - 1A: lessons 1.1 and 1.2 HTML — iOS connection, iPhone 16 Pro, Swift enum/struct
    challenges. No Kotlin, no new explorer. Leftover grep of the two files is clean.
  - 1B: lesson 1.3 HTML is a full Xcode walkthrough (iPhone 16 Pro, deployment 17.0,
    LabApp + Chapter01Screen). Centered baseline; iPhone 16 Pro sim build succeeded. Filename unchanged. Grep clean.
  - 1C: lessons 1.4 and 1.5 HTML — StudyBackground.swift + TranslucentRoundedPanel.swift
    (328×190 pt, 0.25 fill). Chapter01Screen ZStack; iPhone 16 Pro sim build succeeded. Grep clean.
  - 1D: lesson 1.6 HTML — alpha math unchanged; Kotlin mixChannel challenge → Swift/CGFloat;
    map section is Shader-free Color.white.opacity + BlendMode.normal. No lab files. Grep clean.
  - 1E: lesson 1.7 HTML — iPhone 16 Pro experiment; OpacityExperimentControls.swift;
    Chapter01Screen owns panelAlpha; Slider step 0.25. iPhone 16 Pro sim build succeeded. Grep clean.
  - 1F: 1.8 HTML + Ch 1 hub to SwiftUI/iPhone 16 Pro; Chapter01Screen ZStack
    fill/center polish. Hub live checkpoint 1.3. Sim build succeeded. Filename leftovers only.
  - 2A: lessons 2.1 and 2.2 HTML — iOS/SwiftUI, iPhone 16 Pro, 34 pt cells;
    EnlargedPixelGrid + XAxisExplorer on Chapter02Screen. LabHost wired. Sim build succeeded. id leftovers only.
  - 2B: lessons 2.3 and 2.4 HTML — Y-down still iOS; 34 pt cells; 30 pt units;
    YAxisExplorer + BoundsCenterExplorer on Chapter02Screen. Sim build succeeded. 2.5 href leftover only.
  - 2C: lesson 2.5 HTML — px = pt × scale; SwiftUI Canvas stays in points;
    DensityExplorer on Chapter02Screen; 80 px shader callout. Sim build succeeded.
    Leftovers are filename/ids (dp, density) only.
  - 2D: lessons 2.6 and 2.7 HTML — child-local taps in points; GeometryReader
    named parent space + UIView.convert for window/screen. Sim build succeeded.
    2.6 leftover is the 2.5 filename href only.
  - 2E: lessons 2.8 and 2.9 HTML — SwiftUI Canvas/taps in points; px = pt ×
    displayScale. NormalizedCoordinatesExplorer + CoordinateInspector on
    Chapter02Screen. Sim build succeeded. Leftovers are filename/ids only.
  - 2F: Ch 2 hub to SwiftUI/iPhone 16 Pro; 40/216, live checkpoint 1.3;
    restored 2.1 grid on Chapter02Screen. Sim build succeeded.
    Leftover is the 2.5 filename href only.
