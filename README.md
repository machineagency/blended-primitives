# blended-primitives

KnitScape is a design and simulation tool for machine knitting made by Hannah
Twigg-Smith. This repository archives a fork of the KnitScape editor shown in
the UIST 2024 paper
["What's in a Cable? Abstracting Knitting Design Elements with Blended Raster/Vector Primitives"](https://dl.acm.org/doi/10.1145/3654777.3676351).
This version will no longer be updated outside of minor quality of life updates.
Future development will continue in the dedicated KnitScape org
[here](https://github.com/knitscape/). The previous editor specifically for
designing slip and tuck colorwork patterns is located
[here](https://github.com/machineagency/knitscape-2024).

![](/assets/twistBraid.png) _In our design environment for editing knitting
charts with blended primitives, a chart of knitting instructions is rasterized
from layered vector boundaries and paths with associated raster stitch and yarn
blocks. These cabled twist and braid patterns are designed using stitch paths we
defined to encode a "right-leaning twist" (A) and a "left-leaning twist" (B). By
placing the right twist along a stitch path that defines a purl border (C), we
can produce a twist texture (D). By staggering both the left and right twists
(E), we can produce a braid texture (F)._

<!-- ## priority fixes

- [ ] undo is currently bugged
- [ ] sim topology resets on zoom/flip
- [ ] removing a yarn from the yarn palette is bugged
- polygon fill scanline is sometimes slightly off?
- simulation/yarn view
  - shouldn't regenerate yarn topology/cancel relaxation on zoom or when yarn
    colors are changed
  - edge node layout is not correct
  - currently not drawing the last few segments in a yarn.
  - add yarn entry and exit points to indicate where they start and end -->

## Primitive elements:

Base primitives:

- **Stitch block:** A bitmap of stitch operations.
- **Yarn block:** A bitmap of yarn operations.
- **Path:** A vector path between stitch coordinates. We use the lower left
  corner of the stitch as the index.
- **Boundary:** A series of paths enclosing a region.

This creates four types of blended primitives:

- **Stitch paths**
- **Yarn paths**
- **Stitch fills**
- **Yarn fills**

## Interaction Modes

- **Pan:** Pan around the chart workspace without editing anything.
- **Boundary:** Shows all of the boundaries.
  - Drag add new boundary
  - Selecting a boundary shows any attached blocks
  - Reorder boundaries (How to best visualize this?)
- **Path:**
  - Drag add new path
  - Select and drag paths.
  - Add control points.
  - Define yarn edge
  - Define block path
  - You can interact with both boundary paths and independent paths in this
    mode.
- **Block:**
  - Drag to add new block.
  - Shows all of the independent blocks
  - Toggle non-block areas to be gray?
