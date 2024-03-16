---
tags:
  - pc
up: "[[Party/index|Party]]"
xp-available: "15"
vitality-max: "10"
vitality-current: "10"
ap: "0"
race: Ruk
portrait: "[[portrait-akra-jr.png]]"
token: "[[token_akra-jr-EFC96C-1x1.png]]"
---
![[portrait-akra-jr.png]]

## Backstory

### The past

I was adopted as a small child by a loving pair of mothers who lived in a village within the forest. Throughout my adolescence I would occasionally lose several hours of time, unsure of where I had been or who had been with me. 

As a young adult, I and the other Ruk'kan of the village maintained a magical ward to keep the forest from overtaking us. In the last few months however, the ward was more difficult to keep up, even failing completely once or twice. We didn't know why it was happening, and on top of that my episodes of memory loss were happening more frequently. 

Last week, after having an argument with my best friend and parents, I ran into the forest to clear my head. The next thing I knew, it was several hours later and I was standing in the center of the village with no memory of how I got there.

Everyone was gone, with no indication of where they went.

I believe it's my fault that everyone I love is gone. Even if I didn't cause them to abandon the village, the ward must have gone down while I was in the forest and unable to help. I'm guessing the other Ruk'kan couldn't get it back up in time to protect the village from whatever caused them to flee. I have no idea if they are alive or dead.

### The present

Now, with no way to maintain the ward and no one left in the village, I have been forced to travel to Quajreyas for safety and work.

### The future

1. I want to find out what happened to my village. 
2. I want to find out if I caused the ward to fail. 
3. I want to find out why I keep losing my memory for hours at a time
5. I want to find my birth parents. 

## Mechanics

TBD

## Equipment

### Money

TBD

### Weapons

- TBD

### Inventory

- TBD

### Statblock

```statblock
image: [[token_akra-jr-EFC96C-1x1.png]]
name: Akra Jr
type: "Ruk"
subtype: "Ruk"
ac: 1
hp: 10
speed: 10 ft
saves:
  - <ability-score>: number
skillsaves:
  - skills: 9
  - forms: 8
damage_vulnerabilities: "fire, ice, and electricity if wearing heavy armor"
spells:
  - Conjure Flame
  - 3: Fire
  - Flame Touch
  - 7: Fire
traits:
  - name: Sneak Attack
    desc: When target is surprised, triple damage
  - ...
actions:
  - name: Attack
    desc: You attack a target.
  - name: Move
    desc: You move a distance up to your speed.
  - name: Use item
    desc: For example, cosume a potion.
  - ...
reactions:
  - name: Dodge
    desc: You take a 5 foot adjacent step; against melee attacks only.
  - name: Block
    desc: Requires a shield; can be used on ranged attacks.
  - name: Parry
    desc: Requires a melee weapon; against melee attacks only.
  - ...
```