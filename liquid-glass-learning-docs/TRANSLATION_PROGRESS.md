# iOS translation progress

next_step: 7H

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
  - 3A
  - 3B
  - 3C
  - 3D
  - 3E
  - 3F
  - 3G
  - 3H
  - 4A
  - 4B
  - 4C
  - 4D
  - 4E
  - 4F
  - 4G
  - 5A
  - 5B
  - 5C
  - 5D
  - 5E
  - 5F
  - 6.1
  - 6.2
  - 6.3
  - 6.4
  - 6.5
  - 6.6
  - 6.7
  - 6.8
  - 6.9
  - 6.10
  - 6.11
  - 6H
  - 7A
  - 7B
  - 7C
  - 7D
  - 7E
  - 7F
  - 7G

session_order: A1 A2 A3 A4 B1 B2 B3 C1 C2 D1 D2 1A 1B 1C 1D 1E 1F 2A 2B 2C 2D 2E 2F 3A 3B 3C 3D 3E 3F 3G 3H 4A 4B 4C 4D 4E 4F 4G 5A 5B 5C 5D 5E 5F 6.1 6.2 6.3 6.4 6.5 6.6 6.7 6.8 6.9 6.10 6.11 6H 7A 7B 7C 7D 7E 7F 7G 7H 8A 8B 8C 8D 8E 8F 8H 9A 9B 9C 9D 9E 9F 9H F1 F2 F3 F4 F5

notes:
  - 9.10 (user-requested, out of order; not 9F): HTML platform nouns to iOS/MSL;
    DisplacementFieldExplorer.swift + DisplacementField.metal; Chapter09Screen
    wired in LabHost. 9.9 not done, so 9F is not complete. next_step stays 4B.
    Lesson 9.10 remains unresolved. Did not restore 95/216.
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
  - 3A: lessons 3.1 and 3.2 HTML — SwiftUI Color (opacity = alpha channel);
    RgbChannelsExplorer + AlphaExplorer on Chapter03Screen. iPhone 16 Pro sim
    build succeeded. Leftover grep of the step files is clean.
  - 3B: lesson 3.3 HTML — source-over math unchanged; SwiftUI BlendMode.normal;
    OverOperationExplorer on Chapter03Screen. iPhone 16 Pro sim build succeeded.
    Leftover grep of the step files is clean.
  - 3C: lesson 3.4 HTML — draw-order math unchanged; SwiftUI BlendMode.normal;
    DrawOrderExplorer on Chapter03Screen. iPhone 16 Pro sim build succeeded.
    Leftover grep of the step files is clean.
  - 3D: lesson 3.5 HTML — source-over math unchanged; SwiftUI Color + lab
    compositeOver helper; PremultipliedRgbaExplorer on Chapter03Screen.
    iPhone 16 Pro sim build succeeded. Leftover grep of the step files is clean.
  - 3E: lesson 3.6 HTML — sRGB Rec.709 math unchanged; SwiftUI Color + lab
    luminance helper; BrightnessLuminanceExplorer on Chapter03Screen.
    iPhone 16 Pro sim build succeeded. Leftover grep of the step files is clean.
  - 3F: lessons 3.7 and 3.8 HTML — contrast math and source-over tint unchanged;
    SwiftUI Color + lab luminance/compositeOver helpers; ForegroundContrastExplorer
    and TintExplorer on Chapter03Screen. iPhone 16 Pro sim build succeeded.
    Leftover grep of the step files is clean.
  - 3G: 3.9/3.10 HTML — copied 4×5 saturation matrix; BlendMode.normal/multiply/screen/plusLighter.
    SaturationExplorer + BlendModesExplorer. iPhone 16 Pro sim build succeeded. Grep clean.
  - 3H: 3.11 + hub — CompositingLaboratory.swift; copied 4×5 sat + BlendMode.plusLighter.
    Hub stay-complete 40/216, checkpoint 1.3. iPhone 16 Pro sim build succeeded. Grep clean.
  - 4A: 4.1/4.2 HTML — SwiftUI Canvas in points; Path(CGRect)/ellipse/roundedRect
    plus RoundedRectangle(.circular). Explorers on Chapter04Screen. Sim build succeeded.
  - 4B: 4.3/4.4 HTML — CapsulesExplorer + ConcentricCornersExplorer; radius = height/2
    and inner radius = outer − padding. Chapter04Screen wired. iPhone 16 Pro sim build succeeded. Grep clean.
  - 4C: 4.5/4.6 HTML — PathsExplorer; move(to:)/addLine(to:)/closeSubpath(); Canvas in
    points. 4.6 HTML-only addCurve mapping, no cubic explorer. Sim build succeeded. Grep clean.
  - 4D: 4.7/4.8 HTML — ClippingExplorer (clip(to:) on a GraphicsContext copy) +
    MasksExplorer (nested drawLayer + destinationIn). Chapter04Screen wired.
    iPhone 16 Pro sim build succeeded. Grep clean.
  - 4E: 4.9 HTML — SoftEdgesAntialiasingExplorer (coverage = inside probes ÷ 144;
    SwiftUI Canvas circle vs 9×6 teaching grid). Chapter04Screen wired. iPhone 16 Pro sim build succeeded. Grep clean.
  - 4F: 4.10/4.11 HTML — TransformOriginExplorer (UnitPoint + scaleEffect then
    rotationEffect; layout size unchanged) + ShapeLaboratory (inner radius =
    outer − padding). Chapter04Screen wired. iPhone 16 Pro sim build succeeded. Grep clean.
  - 4G: Ch 4 hub to SwiftUI/iPhone 16 Pro; stay-complete 40/216, checkpoint 1.3.
    Chapter04Screen 4.11 copy; 4.6 HTML-only. iPhone 16 Pro sim build succeeded. Grep clean.
  - 5A: 5.1/5.2/5.3 HTML — StateBeforeAnimationExplorer, TimeExplorer (TimelineView),
    ProgressExplorer. Chapter05Screen wired. iPhone 16 Pro sim build succeeded. Grep clean.
  - 5B: 5.4/5.5/5.6 HTML — LinearInterpolationExplorer, EasingExplorer,
    ReadEasingGraphExplorer. Chapter05Screen wired. iPhone 16 Pro sim build succeeded. Grep clean.
  - 5C: 5.7/5.8 HTML — VelocityExplorer (pt/s) + SpringIntuitionExplorer
    (teaching Euler k/c/m). Chapter05Screen wired. iPhone 16 Pro sim build succeeded. Grep clean.
  - 5D: 5.9 redirect left as merge note + OvershootSettleExplorer stub;
    5.10 HTML SwiftUI/iPhone 16 Pro; PressDeformationExplorer (scaleEffect +
    UnitPoint). Chapter05Screen wired. iPhone 16 Pro sim build succeeded. Grep clean.
  - 5E: 5.11/5.12 HTML SwiftUI/iPhone 16 Pro; ReversalInterruptionExplorer
    (custom spring clock keeps q/v) + SlowMotionController (TimelineView play-time
    clock). Chapter05Screen wired. iPhone 16 Pro sim build succeeded. Grep clean.
  - 5F: Ch 5 hub to SwiftUI/iPhone 16 Pro; stay-complete 40/216, checkpoint 1.3.
    Chapter05Screen already hosts 5.1–5.12 (5.9 stub). iPhone 16 Pro sim build succeeded. Grep clean.
  - 6.1: 6.1 HTML to SwiftUI view update / layout / rendering; CompositionLayoutDrawingExplorer
    (Layout + Canvas) on Chapter06Screen; LabHost wired. Filename leftover is the Ch 6 hub href.
    iPhone 16 Pro sim build succeeded. Stay-complete remains 40/216, checkpoint 1.3.
  - 6.2: 6.2 HTML to SwiftUI ZStack sibling order / zIndex / .background–content–.overlay;
    DrawOrderOwnershipExplorer on Chapter06Screen. Filename leftover is the Ch 6 hub href.
    iPhone 16 Pro sim build succeeded. Stay-complete remains 40/216, checkpoint 1.3.
  - 6.3: 6.3 HTML to SwiftUI owner transforms (scaleEffect, rotationEffect, offset,
    compositingGroup, opacity). GraphicsLayersExplorer on Chapter06Screen. Filename
    leftovers are the Ch 6 hub href and 6.4 render-effect filename. iPhone 16 Pro sim
    build succeeded. Stay-complete remains 40/216, checkpoint 1.3.
  - 6.4: 6.4 HTML to SwiftUI .blur() on owned content; RenderEffectOwnedContentExplorer
    on Chapter06Screen. Filename leftovers are the Ch 6 hub href and the explorer
    filename. iPhone 16 Pro sim build succeeded. Stay-complete remains 40/216,
    checkpoint 1.3.
  - 6.5: 6.5 HTML to SwiftUI .blur() on GlassPanel vs missing readable backdrop
    region; BackdropProblemExplorer on Chapter06Screen. Do not use ultraThinMaterial
    as the glass path. Filename leftovers are the Ch 6 hub href and the 6.4 explorer
    filename. iPhone 16 Pro sim build succeeded. Stay-complete remains 40/216,
    checkpoint 1.3.
  - 6.6: 6.6 HTML to ImageRenderer snapshot of a dedicated BackdropArtwork view;
    BackdropRecorder helper + RecordBackgroundExplorer on Chapter06Screen. Four
    routes: direct / record-only / scene replay / two replays. Do not use
    ultraThinMaterial as the glass path. Filename leftover is the Ch 6 hub href.
    iPhone 16 Pro sim build succeeded. Stay-complete remains 40/216, checkpoint 1.3.
  - 6.7: 6.7 HTML to GeometryReader frames in ParentScene, then a panel-sized
    clip and negative offset of the BackdropRecorder image. CropCorrectRegionExplorer
    on Chapter06Screen. Three routes: correct / parent coords / no translation.
    ImageRenderer does not choose the rectangle. Do not use ultraThinMaterial
    as the glass path. Filename leftover is the Ch 6 hub href. iPhone 16 Pro
    sim build succeeded. Stay-complete remains 40/216, checkpoint 1.3.
  - 6.8: 6.8 HTML to ImageRenderer snapshot freshness plus GeometryReader
    crop frames. KeepSampleCurrentExplorer on Chapter06Screen. Four routes:
    both current / freeze layer / freeze bounds / freeze both. Direct backdrop
    stays live so a frozen snapshot can disagree. Do not use ultraThinMaterial
    as the glass path. Filename leftover is the Ch 6 hub href. iPhone 16 Pro
    sim build succeeded. Stay-complete remains 40/216, checkpoint 1.3.
  - 6.9: 6.9 HTML to an ImageRenderer snapshot of BackdropArtwork only;
    AvoidFeedbackLoopsExplorer on Chapter06Screen. GlassPanel is a later
    sibling. One panelLeft places the panel and offsets the crop. No
    safe/unsafe mode. Do not use ultraThinMaterial as the glass path.
    Filename leftover is the Ch 6 hub href. iPhone 16 Pro sim build
    succeeded. Stay-complete remains 40/216, checkpoint 1.3.
  - 6.10: 6.10 HTML to drawingGroup(opaque: false) on the panel-sized replay;
    OffscreenCostExplorer on Chapter06Screen. Panel estimate is pt × displayScale
    at 4 bytes/pixel. Scene-sized drawingGroup is arithmetic only. ImageRenderer
    source stays outside that estimate. Do not use ultraThinMaterial as the glass
    path. Filename leftover is the Ch 6 hub href. iPhone 16 Pro sim build
    succeeded. Stay-complete remains 40/216, checkpoint 1.3.
  - 6.11: 6.11 HTML to one ImageRenderer snapshot of BackdropArtwork plus a
    panel clip and offset. Tint, border, and ForegroundContent stay outside
    that replay. TwoLayerSceneArchitectureExplorer on Chapter06Screen.
    drawingGroup() stays off. Do not use ultraThinMaterial as the glass path.
    Filename leftover is the Ch 6 hub href. iPhone 16 Pro sim build succeeded.
    Stay-complete remains 40/216, checkpoint 1.3.
  - 6H: Ch 6 hub to SwiftUI / iPhone 16 Pro; must-re-read, 40/216, checkpoint 1.3.
    Chapter06Screen already hosts 6.1–6.11. Hub filename stays until F2.
    iPhone 16 Pro sim build succeeded. Android/Kotlin/Compose/AGSL/Pixel 8 grep clean.
  - 7A: 7.1/7.2 HTML to SwiftUI .blur(radius:) in points; displayScale × pt is readout only.
    Neighborhood + radius explorers on Chapter07Screen. iPhone 16 Pro sim build succeeded. 40/216, checkpoint 1.3. Grep clean.
  - 7B: 7.3/7.4 HTML and the scaling companion to Core Image wraps and a smaller bitmap.
    Edge and downsample explorers on Chapter07Screen. iPhone 16 Pro sim build succeeded. 40/216, checkpoint 1.3. Grep clean.
  - 7C: 7.5/7.6 HTML to a tint rectangle after .blur(radius: 18) and setToSaturation on that group.
    TintLayerExplorer and SaturationContrastExplorer on Chapter07Screen. iPhone 16 Pro sim build succeeded. 40/216, checkpoint 1.3. Grep clean.
  - 7D: 7.7/7.8 HTML to an inset centered stroke and a band blur then clipShape.
    StaticRimExplorer and InnerHighlightExplorer on Chapter07Screen. iPhone 16 Pro sim build succeeded. 40/216, checkpoint 1.3. Grep clean.
  - 7E: 7.9/7.10 HTML to a padded .blur behind the clip, and one signed offset before the 8-bit store.
    OuterShadowExplorer and FineNoiseExplorer on Chapter07Screen. Companion HTML left for 7F. iPhone 16 Pro sim build succeeded. 40/216, checkpoint 1.3. Footer still names lesson 7.11.
  - 7F: 7.10 companion HTML names the iPhone 16 Pro CPU bitmap. Salt 0 is unitNoise
    in FineNoiseExplorer.swift. Proof, teaching pixels, and the JS lab stay. 40/216, checkpoint 1.3. Grep clean.
  - 7G: 7.11/7.12 HTML to clipShape slots and a destination-class contrast verdict.
    CombineLayersExplorer and CompareBackgroundsExplorer on Chapter07Screen. iPhone 16 Pro sim build succeeded. 40/216, checkpoint 1.3. Filename leftover is lesson-07-11-compose-the-layers.html. Grep clean.
