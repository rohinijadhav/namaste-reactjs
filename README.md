Namaste React JS

# Parcel (parceljs.org)

- Dev Build 
- Create a server 
- Host a Build on server
- HMR -  Hot module Replacement (host on server with new build) 
- File Watching Algorithm - written in C++
- Caching - Create a faster build
- Bundling
- Minification
- Compression
- Image Optimization 
- Consistent Hashing
- Code Splitting
- Differntial Build - Support older browser
- Diagnostic
- Errror Handlings
- Secure SSL hosting - Https
- Tree Shaking

# HMR  

Definition:

HMR is a feature in modern bundlers that updates modules in a running application without doing a full page reload.

-What it does

When you change a file (JS, JSX, CSS, etc.):

Only that module is replaced in the running app

The app keeps its state (e.g., React component state)

You see the changes instantly

No refresh → faster development → less disruption

# browserlist (browserlist.dev)
- Support mentioned browser versions

# Babel
- transpilation and polyfilling
- Convert JSX code into React code.


# JSX
- HTML Like Syntax. But its not HTML
- Handle  Cross Site Scripting 
ex:
const data = api.getData()    // THis can have malicious code coming from api.
<h1>{data}</h1>              // this JSX element will sanitize this data before excuting.


# Namaste React Food Project

// Components being used in this project

// Header Component
// - Logo
// - Nav Items

// Body Component
// - Search Bar
// - Type of Order (Delivery, Dine-Out, Night-Life, etc.)
// - Restaurant Container
// - Restaurant Card (many cards)
// - Image
// - Name
// - Rating
// - Type of cusine
// - Cost for two
// - Address

// Footer Component
// - Copyrights
// - Links
// - Contact Info
// - About Us


# Types of Export/Import

- Default Export/Import

export default *Variable*;
import *Variable* from "path the file";

- Named Export/Import

export const Variable*
import { Variable* } from "path the file";


# Rendering
It runs components and generates the Virtual DOM in the form of React elements (JavaScript objects), which are represented internally as Fiber nodes.


# Real DOM
- Real DOM is the actual Document Object Model that the browser uses to display the UI on the screen.
- Html element, attributes,text nodes that brower can render or paint on screen.


# Virtual DOM
- Virtual Dom is lighweight and in memory representation of Real DOM.
- It is implement as  react element or javascript object which has type, props and childrens
    Example: { type: 'div', props: { children: [] } }

# DIFF Algorithm
- React on every change or update, create a new virtual Dom.
- It compare old Vitual Dom tree with new Virtual Dom tree using
  DIFF Algorithm.
- DIFF Algorithm get list of minimal changes from comparison.
- So only update changed part of real DOM.
- This process is called Reconciliation.


# Reconciliation 
- It is a process where overall Virtual DOM node / Fibder Node tree comparision happens.


# React Filter
- It is an architecture that manage and schedule reconciliation process     based on Priorities.
- It make diffing process intrupatable and Prioritized.
- It is a redesign of reconciliation process that controls how diff is scheduled and work in split.

- So in simple way to explain,

- Before React Fiber

    - Before react 16 version. reconciliation was working on plain react element or javascript object.
    
    -The reconciliation process was synchronous and blocking. Once rendering started, React could not pause or interrupt, which could block the UI.


- After React Fiber

    - Starting from react 16 version, React Fiber introduced which handled reconciliation process on Fiber node = (Virtual DOM node + extra capabilities) instead of plan node of javascript object.

    - This gave Fiber a control to decide, priorities, schedule and interrupt reconciliation process.

    - React can split reconciliation into small units of work. This keeps the UI responsive and smooth


# END-To-END FLOW

State / Props change
        ↓
React Fiber (Scheduler + Reconciler)
        ↓
Render Phase (interruptible)
  ├─ Rendering        → creates UI description (Fiber nodes)
  └─ Reconciliation   → diffs Fiber trees & marks effects
        ↓
Commit Phase (non-interruptible)
  └─ React Fiber commits changes → updates Real DOM
        ↓
Browser
  └─ Layout + Paint → pixels on screen

# Metadata of Fiber node

Fiber node
 ├─ Type info       → what kind of element/component it represents (div, function, class, etc.)
 ├─ Props & State   → what data to render and update
 ├─ Child/Sibling   → Links to traverse the Fiber tree efficiently
 ├─ Effect tag      → what DOM change is needed (UPDATE, PLACEMENT, DELETION)
 ├─ Lanes/Priority  → when to render
 ├─ Hooks           → For functional components, stores state, reducer info, refs
 └─ Alternate       → Reference to the old/current Fiber node for diffing


# CORS PROXY

corsproxy.io


# Routing 

https://reactrouter.com/

- Client side Routing
- Server side Routing

# Mouning

Render prepares the UI description, and mounting happens during the commit phase when React inserts the component into the real DOM.

Render !== showing UI  - It is decide what to show on UI.

Commit / Mount === SHowing UI - It is actually shows compoent on UI but ceating or modifying real DOM which browser paint on the screen.

Final crystal-clear breakdown
🔹 Mount (React – Commit Phase)

Creates DOM nodes (for first render)

Modifies DOM nodes (for updates)

Attaches event listeners

Marks component as mounted

👉 React’s responsibility ends here

🔹 Paint (Browser)

Reads the updated DOM

Calculates layout

Paints pixels

Displays UI

👉 Browser’s responsibility

# Unmounting
Remove component from actual Dom.