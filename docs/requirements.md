# Requirements and user stories

## Functional requirements

- Show Data Sources, Collection Methods, Analysis Methods, and Publication Venues navigation in that order.
- Initially show Data Sources, with exactly one selected tab and one visible panel.
- Selecting any tab shows its corresponding heading and panel and hides the other panels.
- Support repeated switching without navigation away from the page.
- Identify planned content and its milestone in each panel.
- Present all seven source categories with name, data types, and description.
- Present all six collection methods with purpose, pros, and cons.
- Present all eight analysis methods with analysis type and use cases.
- Present all nine venues with full name, abbreviation, type, focus, and high/medium MSR relevance; distinguish conferences from journals.

## User stories

| User story | Acceptance criteria |
| --- | --- |
| As a new PhD student, I want four clearly named sections so that I can find the relevant stage of my research. | All four exact labels appear in the specified order; Data Sources opens first. |
| As a researcher, I want to switch sections without leaving the page so that I can explore the guide quickly. | Each selection shows exactly one corresponding panel; repeated visits work. |
| As a keyboard user, I want to operate the tabs without a mouse so that I can navigate independently. | Arrow keys move and wrap; Home/End select endpoints; Tab enters the selected panel; focus is visible. |
| As a student, I want to recognize unfinished sections so that I know which information is still planned. | Every panel labels its future content milestone. |
| As a PhD student, I want to compare sources and available data so that I can choose evidence for a study. | Seven categories include name, data types, and description. |
| As a researcher, I want to compare collection methods and tradeoffs so that I can choose a practical approach. | Six methods include use, at least one advantage, and at least one limitation. |
| As a researcher, I want analysis methods grouped by type with use cases so that I can match a method to my question. | Eight methods include type and a concrete use case. |
| As a researcher, I want to compare publication venues so that I can identify a suitable audience. | Six conferences and three journals include the requested fields and a justified relevance level. |
| As a student using a smaller screen, I want readable controls and content so that I can consult the guide on my phone. | Basic usability at 350px; broader device and accessibility review later. |
| As a maintainer, I want automated checks before publication so that broken navigation is detected before deployment. | Push/PR tests run; deployment requires test success and a main-branch revision. |
