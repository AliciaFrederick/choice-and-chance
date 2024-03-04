---
title: Campaign Overview
---
- [ ] Add Joe and Amy's character images

# Party 

| Alicia           | Joe              | Amy              |
| ---------------- | ---------------- | ---------------- |
| ![[akra-jr.png]] | ![[akra-jr.png]] | ![[akra-jr.png]] |
| [[Akra Jr]]      | [[Thorin Jr]]    | [[Cassandra Jr]] |

# Session Highlights

![[2024-03-02#2024-03-02]] 

```dataview
table summary from #session-notes and !"Extras/Templates"
```

```dataview
list summary from #session-notes and !"Extras/Templates"
```
```dataviewjs
let pages = dv.pages('-"Extras/Templates" and #session-notes')
let items = [];
for (let page of pages) {
	items.push(page.file.link + ": " + page.summary)
}
dv.list(items)
``` 

```dataviewjs
let pages = dv.pages('-"Extras/Templates" and #session-notes')
let items = [];
for (let page of pages) {
	items.push(page.file.link + ": " + page.summary)
}
const markdown = dv.markdownList(items)
dv.paragraph(markdown)
```
