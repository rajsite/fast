---
id: fast-foundation.ariaglobalstatesandproperties
title: ARIAGlobalStatesAndProperties class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [ARIAGlobalStatesAndProperties](./fast-foundation.ariaglobalstatesandproperties.md)

## ARIAGlobalStatesAndProperties class

Some states and properties are applicable to all host language elements regardless of whether a role is applied. The following global states and properties are supported by all roles and by all base markup elements. [https://www.w3.org/TR/wai-aria-1.1/\#global\_states](https://www.w3.org/TR/wai-aria-1.1/#global_states)

This is intended to be used as a mixin. Be sure you extend FASTElement.

<b>Signature:</b>

```typescript
export declare class ARIAGlobalStatesAndProperties 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [ariaAtomic](./fast-foundation.ariaglobalstatesandproperties.ariaatomic.md) |  | "true" \| "false" \| string \| null | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. [https://www.w3.org/TR/wai-aria-1.1/\#aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) |
|  [ariaBusy](./fast-foundation.ariaglobalstatesandproperties.ariabusy.md) |  | "true" \| "false" \| string \| null | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. [https://www.w3.org/TR/wai-aria-1.1/\#aria-busy](https://www.w3.org/TR/wai-aria-1.1/#aria-busy) |
|  [ariaControls](./fast-foundation.ariaglobalstatesandproperties.ariacontrols.md) |  | string \| null | Identifies the element (or elements) whose contents or presence are controlled by the current element.[https://www.w3.org/TR/wai-aria-1.1/\#aria-controls](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) |
|  [ariaCurrent](./fast-foundation.ariaglobalstatesandproperties.ariacurrent.md) |  | "page" \| "step" \| "location" \| "date" \| "time" \| "true" \| "false" \| string \| null | Indicates the element that represents the current item within a container or set of related elements.[https://www.w3.org/TR/wai-aria-1.1/\#aria-current](https://www.w3.org/TR/wai-aria-1.1/#aria-current) |
|  [ariaDescribedby](./fast-foundation.ariaglobalstatesandproperties.ariadescribedby.md) |  | string \| null | Identifies the element (or elements) that describes the object.[https://www.w3.org/TR/wai-aria-1.1/\#aria-describedby](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) |
|  [ariaDetails](./fast-foundation.ariaglobalstatesandproperties.ariadetails.md) |  | string \| null | Identifies the element that provides a detailed, extended description for the object.[https://www.w3.org/TR/wai-aria-1.1/\#aria-details](https://www.w3.org/TR/wai-aria-1.1/#aria-details) |
|  [ariaDisabled](./fast-foundation.ariaglobalstatesandproperties.ariadisabled.md) |  | "true" \| "false" \| string \| null | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.[https://www.w3.org/TR/wai-aria-1.1/\#aria-disabled](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled) |
|  [ariaErrormessage](./fast-foundation.ariaglobalstatesandproperties.ariaerrormessage.md) |  | string \| null | Identifies the element that provides an error message for the object.[https://www.w3.org/TR/wai-aria-1.1/\#aria-errormessage](https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage) |
|  [ariaFlowto](./fast-foundation.ariaglobalstatesandproperties.ariaflowto.md) |  | string \| null | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.[https://www.w3.org/TR/wai-aria-1.1/\#aria-flowto](https://www.w3.org/TR/wai-aria-1.1/#aria-flowto) |
|  [ariaHaspopup](./fast-foundation.ariaglobalstatesandproperties.ariahaspopup.md) |  | "false" \| "true" \| "menu" \| "listbox" \| "tree" \| "grid" \| "dialog" \| string \| null | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.[https://www.w3.org/TR/wai-aria-1.1/\#aria-haspopup](https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup) |
|  [ariaHidden](./fast-foundation.ariaglobalstatesandproperties.ariahidden.md) |  | "false" \| "true" \| string \| null | Indicates whether the element is exposed to an accessibility API[https://www.w3.org/TR/wai-aria-1.1/\#aria-hidden](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) |
|  [ariaInvalid](./fast-foundation.ariaglobalstatesandproperties.ariainvalid.md) |  | "false" \| "true" \| "grammar" \| "spelling" \| string \| null | Indicates the entered value does not conform to the format expected by the application.[https://www.w3.org/TR/wai-aria-1.1/\#aria-invalid](https://www.w3.org/TR/wai-aria-1.1/#aria-invalid) |
|  [ariaKeyshortcuts](./fast-foundation.ariaglobalstatesandproperties.ariakeyshortcuts.md) |  | string \| null | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.[https://www.w3.org/TR/wai-aria-1.1/\#aria-keyshortcuts](https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts) |
|  [ariaLabel](./fast-foundation.ariaglobalstatesandproperties.arialabel.md) |  | string \| null | Defines a string value that labels the current element.[https://www.w3.org/TR/wai-aria-1.1/\#aria-label](https://www.w3.org/TR/wai-aria-1.1/#aria-label) |
|  [ariaLabelledby](./fast-foundation.ariaglobalstatesandproperties.arialabelledby.md) |  | string \| null | Identifies the element (or elements) that labels the current element.[https://www.w3.org/TR/wai-aria-1.1/\#aria-labelledby](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby) |
|  [ariaLive](./fast-foundation.ariaglobalstatesandproperties.arialive.md) |  | "assertive" \| "off" \| "polite" \| string \| null | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.[https://www.w3.org/TR/wai-aria-1.1/\#aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) |
|  [ariaOwns](./fast-foundation.ariaglobalstatesandproperties.ariaowns.md) |  | string \| null | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.[https://www.w3.org/TR/wai-aria-1.1/\#aria-owns](https://www.w3.org/TR/wai-aria-1.1/#aria-owns) |
|  [ariaRelevant](./fast-foundation.ariaglobalstatesandproperties.ariarelevant.md) |  | "additions" \| "additions text" \| "all" \| "removals" \| "text" \| string \| null | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.[https://www.w3.org/TR/wai-aria-1.1/\#aria-relevant](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) |
|  [ariaRoledescription](./fast-foundation.ariaglobalstatesandproperties.ariaroledescription.md) |  | string \| null | Defines a human-readable, author-localized description for the role of an element.[https://www.w3.org/TR/wai-aria-1.1/\#aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) |