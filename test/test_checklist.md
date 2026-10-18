# Manual acceptance checklist

| Steps | Expected result |
| --- | --- |
| Load the page in a fresh tab. | Title and four navigation choices are visible, and Data Sources is selected. |
| Click each tab, then revisit all of them. | Correct heading appears; other panels disappear. Selection styling follows the chosen tab. |
| Reload, use Tab to reach the skip link, and press Enter. | Focus moves to main content and the page remains usable. |
| Focus a tab with Tab. Press Left/Right repeatedly, Home, and End. | Selection and focus move together, wrap at the ends, and match the visible panel. Focus is clearly visible. |
| With a tab selected, press Tab and then Shift+Tab. | Focus enters its panel and returns to the selected tab. Hidden panels and inactive tabs do not interrupt the sequence. |
| Inspect at 350px and a desktop width, then at 200% zoom. | Text is readable, controls are usable, content is not clipped, and no page-level horizontal scrolling is needed. |
| Open browser developer tools and inspect Console and Network while switching tabs. | No application script errors or missing CSS/JS files. |
| Open the public GitHub Pages URL, refresh it, and repeat M01/M02/M04. | HTML, CSS, and JavaScript load under the repository subdirectory and navigation works on the deployed page. |

- [ ] Manual tests completed.
- [ ] Five automated tests pass on the submitted revision.
- [ ] Main-branch GitHub Actions test and deployment jobs succeed.
- [ ] Repository is public, PRs are merged, relevant issues are closed, and future milestones remain open.
