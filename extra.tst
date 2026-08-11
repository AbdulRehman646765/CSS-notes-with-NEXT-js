I want you to improve and properly redesign the Footer of my Notes application.

IMPORTANT:
You created the current Footer and its related CSS, so please first inspect the CURRENT implementation of:
- Footer.tsx
- NotesContext / context files
- relevant notes/topic components
- current footer CSS
- existing theme system
- existing TOC/sidebar system
- progress/bookmarks/practice functionality
- routing/course structure

Do NOT blindly add duplicate CSS or duplicate components.

I previously had an old footer CSS section at the beginning of the stylesheet. I have already removed that old footer CSS and kept the newer redesigned footer CSS that was pasted at the END of the stylesheet. Treat the current footer CSS at the END as the active/current design and improve that implementation instead of creating another footer CSS section.

==================================================
1. VERCEL-STYLE THEME SWITCHER IN FOOTER
==================================================

I want a small theme switcher in the footer similar to the Vercel-style control shown in the reference image.

It should have 3 options:

[ System ] [ Light ] [ Dark ]

Use clean icons:
- System → desktop/monitor icon
- Light → sun icon
- Dark → moon icon

Requirements:
- Compact pill-shaped control.
- Minimal and premium.
- Active option should have a subtle highlighted background.
- Smooth hover/active transitions.
- Fully responsive.
- It must use the SAME theme state/system already used by the Header.
- Do NOT create a separate theme state in Footer.
- If the current app only supports light/dark, inspect the existing theme implementation and add System support properly without breaking the current Light/Dark behavior.
- System mode should follow the user's OS preference.
- Theme selection should persist if the current app already persists theme preferences.
- Header and Footer theme controls must always stay synchronized.

Do not duplicate theme logic unnecessarily.

==================================================
2. REPLACE "NEXT.JS / TYPESCRIPT / CSS"
==================================================

The current footer has this:

footer-tech-stack

with:

- Next.js
- TypeScript
- CSS

I do NOT want technology-stack information there anymore.

Replace that section with:

"Other Notes"

Courses/notes should be:

- HTML
- CSS
- JavaScript
- React

Use appropriate icons:
- HTML → fa-html5
- CSS → fa-css3-alt
- JavaScript → fa-js
- React → fa-react

Make them look like compact premium navigation chips/buttons.

Example:

Other Notes
[ HTML ] [ CSS ] [ JavaScript ] [ React ]

Requirements:
- They must be REAL working navigation links.
- Do not use fake/dummy links.
- Inspect the existing routing/course structure and use the actual routes.
- CSS should be marked active when the user is currently on CSS Notes.
- HTML should be active on HTML Notes.
- JavaScript should be active on JavaScript Notes.
- React should be active on React Notes.
- Do this dynamically from the current route/course instead of hardcoding CSS as active.
- If a course does not currently have a route/page, inspect the project before deciding how it should behave. Do not invent broken routes.

==================================================
3. MAKE "LEARN" SECTION ACTUALLY WORK
==================================================

The current footer has:

Learn

- Introduction
- Selectors
- Box Model
- Flexbox
- CSS Grid

These are currently using simple anchors such as:

#introduction
#selectors
#box-model
#flexbox
#grid

I want these to ACTUALLY work with the current notes/topics structure.

IMPORTANT:
Do not assume these IDs exist.

First inspect how topics are currently rendered and how topic IDs/anchors are generated.

Then connect the footer Learn links to the REAL topic IDs/routes used by the application.

Requirements:
- Clicking Introduction should scroll/navigate to the actual Introduction topic.
- Selectors → actual Selectors topic.
- Box Model → actual Box Model topic.
- Flexbox → actual Flexbox topic.
- CSS Grid → actual CSS Grid topic.
- Smooth scrolling should work.
- Because the header is sticky, the target topic must NOT hide underneath the header.
- Add/use appropriate scroll-margin-top if needed.
- If these topic names differ from the current actual topics, use the existing topic names/IDs rather than inventing new ones.
- Preserve the current notes structure.

Also make sure these links work correctly on mobile.

==================================================
4. MAKE "RESOURCES" ACTUALLY WORK
==================================================

Current Resources section:

- Table of Contents
- My Progress
- Bookmarks
- Practice
- All Topics

I do NOT want dummy href="#..." links.

Inspect the current application and connect each item to the existing functionality.

Expected behavior:

Table of Contents:
- Should open the existing TOC/sidebar using the existing sidebar state/functionality.
- If NotesContext already has setSidebarOpen, use that.
- Do NOT create another TOC system.

My Progress:
- Connect to the existing progress UI/functionality.
- If progress is displayed in an existing section/modal/panel, navigate/open that exact UI.
- Do not create a fake section just to make the link work.

Bookmarks:
- Connect to the existing bookmark functionality/UI if it exists.
- Do not create duplicate bookmark state.

Practice:
- Connect to the existing practice feature if it exists.
- If practice is not implemented yet, do NOT invent a fake route. Clearly identify that it is not currently implemented and leave it in a sensible state.

All Topics:
- Should take the user to the actual beginning/top of the notes/topic list.
- Use smooth scrolling where appropriate.

Again:
DO NOT create duplicate functionality.
Use the existing Context, components, state, routes, and handlers.

==================================================
5. FOOTER DESIGN
==================================================

Keep the current redesigned footer style that we already implemented.

Do not make it overly complicated.

I want:
- Premium
- Clean
- Modern
- Documentation/learning-platform feel
- Same visual language as the Header
- Good spacing
- Subtle borders
- Subtle hover effects
- No excessive animations
- No unnecessary glowing effects
- No huge footer height

Keep the existing footer hero/CTA section.

Keep:
- CSS Notes branding
- Author section
- Newsletter
- Social links
- Back to Top

But improve spacing/alignment where necessary.

==================================================
6. RESPONSIVE DESIGN
==================================================

Check the footer at:

- Desktop
- Tablet
- Mobile
- Very small mobile screens

Requirements:
- No horizontal overflow.
- Other Notes chips should wrap properly.
- Theme switcher should remain usable.
- Newsletter input should not overflow.
- Footer columns should stack cleanly.
- Links should have comfortable touch targets on mobile.

==================================================
7. ACCESSIBILITY
==================================================

Make sure:

- Buttons have aria-labels where needed.
- Theme buttons have titles/tooltips.
- Links have meaningful labels.
- Keyboard navigation works.
- Focus states are visible.
- Do not rely only on icons to communicate functionality.

==================================================
8. CSS CLEANUP
==================================================

VERY IMPORTANT:

Before adding CSS:

1. Inspect the current footer CSS.
2. Confirm which footer CSS is currently active.
3. Do not append another duplicate footer CSS block.
4. Modify the existing footer CSS section in place.
5. Remove obsolete styles/classes that are no longer used.
6. Keep the stylesheet organized.

The OLD footer CSS that was previously at the beginning has already been removed.

The NEW redesigned footer CSS currently exists at the END of the stylesheet.

Please work with that current implementation.

==================================================
9. DO NOT BREAK EXISTING FEATURES
==================================================

Before finishing, verify that you have NOT broken:

- Header theme toggle
- Dark mode
- Light mode
- Search
- Ctrl + K search shortcut
- TOC/sidebar
- Language selector
- Font size
- Progress tracking
- Reset progress
- Bookmarks
- Topic navigation
- Responsive layout

Do not replace working functionality with mock/demo functionality.

==================================================
10. FINAL VERIFICATION
==================================================

After implementation:

- Run the project.
- Check for TypeScript errors.
- Check for console errors.
- Check all Footer links.
- Check theme switching from Footer.
- Check synchronization between Header and Footer theme controls.
- Check course navigation.
- Check Learn links.
- Check Resources links.
- Check mobile layout.
- Check that no duplicate CSS exists.

At the end, give me a concise summary of:
1. What you changed.
2. Which existing functions/components you reused.
3. Which Footer links are now functional.
4. Whether System theme was added or already existed.
5. Any feature that could not be connected because it does not currently exist in the app.

Do not just tell me what you plan to do. Inspect the existing code and implement the changes directly.