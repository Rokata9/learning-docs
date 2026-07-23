# Lesson 1.1 — Current user journey baseline

Do not inspect `tiled-engine/src/`. Do not modify Android production source in this lesson.

Use only these temporary evidence labels:

- `SOURCE` — directly established by inspected surviving source.
- `DEVICE` — observed on the Pixel 8 Pro or present in captured logs.
- `UNKNOWN` — not established by the allowed source or current observation.

## 1. Baseline identity

- Date and local time:
- Android-project path:
- Android commit (`git rev-parse HEAD`):
- Android branch (`git branch --show-current`):
- Android worktree before testing (`git status --short`):
- Build command and result:
- Build variant:
- Device: Pixel 8 Pro
- Android version / build number:
- Display refresh-rate setting:
- Developer-options animation scales:
  - Window animation scale:
  - Transition animation scale:
  - Animator duration scale:
- Screen recording used: yes / no
- Unrecorded repeat performed: yes / no

## 2. Photo dataset

Use at least three photos and select a middle entry photo.

| Role | Identifier / filename | Orientation | Approximate source dimensions if known | Distinct feature used for gesture tracking |
|---|---|---|---:|---|
| Previous neighbor |  |  |  |  |
| Entry photo |  |  |  |  |
| Next neighbor |  |  |  |  |

Cache state is not controlled in Lesson 1.1. Record whether each flow was the first open after app launch or an immediate repeat.

## 3. Predictions written before running

1. Transition drawable expected: HQ / LQ / uncertain
   - Reason:
2. Black frame expected at either ownership handoff: yes / no / uncertain
   - Reason:
3. `onReady()` swap expected to be visible: yes / no / uncertain
   - Reason:
4. Pinch focal point expected to stay anchored: yes / no / uncertain
   - Reason:
5. Back after paging expected outcome:
6. Rotation framing expected outcome:
7. Back after rotation expected outcome:

## 4. Run A — forward handoff, gestures, animated return

### A0. Setup

- Cache state note:
- Entry photo identifier:
- Grid screenshot path:
- Recording path or external location:
- Log capture path:

### A1. Tap to transition-drawable readiness

| Observation | Evidence label | Exact note / timestamp |
|---|---|---|
| Destination wait shows grid, black, or another frame |  |  |
| `HIGH quality TIMEOUT` appears |  |  |
| `LOW quality fallback SUCCESS` appears |  |  |
| `HIGH quality SUCCESS` appears |  |  |
| Drawable that won: HQ / LQ / uncertain |  |  |

### A2. 300 ms overlay-clone transition

- Crop continuity at start:
- Bounds motion:
- Image-matrix motion:
- Scrim behavior:
- Any jump, flash, stale pixels, or aspect-ratio mismatch:
- Relevant video timestamp:

### A3. Clone-to-destination-placeholder ownership change

- Visible mismatch: none / describe
- Black frame: yes / no / uncertain
- Scale or position change: none / describe
- Color or sharpness change: none / describe
- Evidence path and timestamp:

### A4. Destination-placeholder-to-live-surface ownership change

- `Target: tile engine ready, swapping in surface` timestamp:
- Visible mismatch: none / describe
- Black frame: yes / no / uncertain
- Framing change: none / describe
- Sharpness change: none / describe
- Evidence path and timestamp:

### A5. Gestures on the live surface

| Gesture | Exact action | Observed result | Anomaly without invented cause |
|---|---|---|---|
| Slow pinch in |  |  |  |
| Slow pinch out |  |  |  |
| Pan horizontally |  |  |  |
| Pan vertically |  |  |  |
| Double-tap |  |  |  |
| Moderate fling |  |  |  |

### A6. Back on the entry photo

- Return animation occurred: yes / no
- Clone ended at the original grid cell: yes / no / uncertain
- Scrim faded out cleanly: yes / no / uncertain
- Original thumbnail visible after return: yes / no
- Original thumbnail opacity normal: yes / no / uncertain
- Evidence path and timestamp:

## 5. Run B — page to a neighbor, then plain pop

- Cache state note:
- Entry photo identifier:
- Paging direction:
- Final current photo identifier:
- Page snap completed before Back: yes / no
- Back outcome: animated return / plain pop / uncertain
- Entry thumbnail restored: yes / no / uncertain
- Grid scrolled to neighboring photo's cell: yes / no / not expected
- Flash or stale frame:
- Evidence paths and timestamps:

## 6. Run C — rotate, preserve framing if supported, then plain pop

- Cache state note:
- Entry photo identifier:
- Pre-rotation zoom/framing description:
- Portrait-before screenshot:
- Landscape screenshot:
- Portrait-after screenshot:
- Same logical photo region after landscape rotation: yes / partly / no
- Same logical photo region after returning to portrait: yes / partly / no
- Back outcome: animated return / plain pop / uncertain
- Flash, reset, jump, or error:
- Evidence paths and timestamps:

## 7. Source expectations versus device results

| Claim | Source expectation | Device result | Match / contradiction / unknown |
|---|---|---|---|
| Overlay-clone animation duration is configured as 300 ms | `SOURCE` |  |  |
| LQ fallback decision becomes eligible after 75 ms | `SOURCE` |  |  |
| HQ success callback is delayed by 2,000 ms in the current debug configuration | `SOURCE` |  |  |
| Native viewer starts only after the clone transition-end callback | `SOURCE` |  |  |
| Placeholder stays visible until `onReady()` | `SOURCE` |  |  |
| Same-entry Back uses an animated return | `SOURCE` expectation |  |  |
| Paged Back uses a plain pop | `SOURCE` expectation |  |  |
| Recreated-detail Back uses a plain pop | `SOURCE` expectation |  |  |
| Framing survives rotation | Source comment only |  |  |
| No black frame occurs | Not source-proven |  |  |

## 8. Explicit source inconsistencies

### XML warm-up comment versus call order

- Exact source finding:
- Device observation relevant to the discrepancy:
- Current course wording accepted:

### `add/hide` documentation versus `add(...)` implementation

- Exact source finding:
- Device observation relevant to the discrepancy:
- Claim deliberately not made:

### “Both return paths” wording

- Animated return outcome:
- Plain-exit causes:

## 9. Unexplained anomalies

Write only the observed event and its context. Do not invent a native cause.

1.
2.
3.

## 10. Exercise answers submitted in chat

1.
2.
3.
4.

## 11. Final integrity check

- Android worktree after testing (`git status --short`):
- Android production source changed: no
- `tiled-engine/src/` remained unopened: yes / no
- Existing Android-project learning chapters were ignored: yes / no
- Evidence committed or paths recorded: yes / no
- Ready to request grading and completion: yes / no
