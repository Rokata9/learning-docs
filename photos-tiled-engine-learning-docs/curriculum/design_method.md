# Curriculum design method

## Source-derived responsibility inventory

The attached module contains 5,997 non-test lines across build files, four Kotlin source files, seven C++ headers, five C++ implementation files, and the native CMake file.

The source inventory and both coverage matrices state what the existing module requires. They do not silently replace it with a generic image-viewer syllabus.

## Course-added prerequisite material

The source does not teach a beginner what a pointer, row stride, affine transform, JNI global reference, EGL context, texture coordinate, condition variable, or native fence is.

The course adds prerequisites for those concepts. They are teaching scaffolding, not claims that the reference source explains them.

## Calibration pass

The learner is an experienced programmer. Familiar control flow, collections, functions, and state are taught only in their C++ or engine-specific form.

The learner is a total beginner in C++, image processing, native memory, JNI, EGL/OpenGL ES, and low-level concurrency. Those mechanisms remain definition-first and fine-grained.

## Ordering pass

The plan was checked for premature terms and operations. Examples of rejected orderings include:

- invoking Kotlin from a native-created thread before native threads and attachment exist;
- converting view pixels to normalized device coordinates before both spaces are defined;
- calculating fit framing during the first texture-upload checkpoint before fit math exists;
- naming pyramid-level or tile-local coordinates before a level or tile has been introduced;
- adding filmstrip offsets to a single-tile draw-quad lesson before paging exists;
- publishing pager state in the single-document engine phase.

## Lesson-count method

The current course contains **539 lessons**.

The number was counted after the source responsibilities and prerequisite graph were audited. It was not selected in advance. The count may increase when a real lesson page exposes another prerequisite boundary. It must not be preserved by compressing an explanation.

## Explicit exclusions

No lesson exists merely to observe familiar behavior, explain the transition framework, tour the project, maintain a journal, catalogue media, or prove that the learner has already noticed a visual result. Runtime checks exist only to verify code implemented in that lesson.
