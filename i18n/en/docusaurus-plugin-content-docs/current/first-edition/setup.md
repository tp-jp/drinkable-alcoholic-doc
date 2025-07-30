---
sidebar_position: 2
title: Setup Guide
description: Detailed installation and configuration instructions for Drinkable Alcoholic
---

# Setup Guide

This page explains the detailed installation process for "Drinkable Alcoholic".

## System Requirements

- Unity 2022.3.22f1
- VRChat SDK - Base 3.7.0 or later
- VRChat SDK - World 3.7.0 or later

## Installation Steps

### 1. Import the Unitypackage

Import the `unitypackage` included in the extracted zip file into Unity.

### 2. Place the Prefabs

#### Steps

1. Open the `Assets/TpLab/DrinkableAlcoholic/Prefabs/FirstEdition` folder in the **Project window**
2. Select the **Prefab** you want to use
3. Drag and drop it into the **Hierarchy** to place it

:::tip For Beginners

- Use **Sets** to place bottles and glasses together conveniently
- If you want to place them individually, choose from **Bottles** and **Glasses**
  :::

#### Available Prefabs

| Category       | Prefab Name        | Description               | Notes                                   |
| -------------- | ------------------ | ------------------------- | --------------------------------------- |
| 🍾 **Bottles** | WhiskeyBottle      | Whiskey bottle            | Combine with whiskey glass              |
|                | WineBottle         | Wine bottle               | Combine with wine glass                 |
| 🥃 **Glasses** | WhiskeyGlass       | Whiskey glass             | Can be poured from whiskey bottle       |
|                | WineGlass          | Wine glass                | Can be poured from wine bottle          |
|                | EmeraldCoolerGlass | Cocktail (Emerald Cooler) | Standalone use, Use button fills to max |
|                | TokyoStationGlass  | Cocktail (Tokyo Station)  | Standalone use, Use button fills to max |
| 📦 **Sets**    | WhiskeySet         | Whiskey set               | Bottle + glass combination              |
|                | WineSet            | Wine set                  | Bottle + glass combination              |

:::note Folder Structure

- **Bottles**: Inside `Bottle` folder
- **Glasses**: Inside `Glass` folder
- **Sets**: Main folder
  :::

:::warning Combination Notes

- **WhiskeyBottle** → Can pour into **WhiskeyGlass**
- **WineBottle** → Can pour into **WineGlass**
- **Cocktails** are used individually, Use button fills them to full
  :::

### 3. Glass Configuration

Configure settings in the glass Inspector.

| Setting           | Description                                                    | Value              | Effect                         |
| ----------------- | -------------------------------------------------------------- | ------------------ | ------------------------------ |
| **TargetStreams** | Specify the name of particles that pour alcohol into the glass | Particle name      | Responds to specific particles |
|                   |                                                                | `Size: 0`          | Responds to all particles      |
| **Pour Speed**    | Speed at which alcohol is poured from bottle to glass          | Number (e.g., 1.0) | Higher value = faster pouring  |
| **Drink Speed**   | Speed at which alcohol is consumed when tilting the glass      | Number (e.g., 1.0) | Higher value = faster drinking |

## How to Use

### Basic Operation Steps

#### 🍾 Pouring from Bottle to Glass

1. **Pick up the bottle** - Grab the bottle in VR
2. **Hold the Use button** while tilting the bottle
3. **Tilt over the glass** and liquid will pour

:::info Compatible Combinations

- **WhiskeyBottle** → **WhiskeyGlass**
- **WineBottle** → **WineGlass**
  :::

#### 🥃 Drinking from Glass

1. **Pick up the glass** - Grab the glass in VR
2. **Tilt the glass** and the contents will sway
3. **Tilt further** and the contents will decrease

#### 🍹 Enjoying Cocktails

1. **Pick up the cocktail glass**
2. **Press the Use button** and it fills to maximum
3. **Tilt the glass** to drink the cocktail

### Enhancing Visual Effects

To make bottles and glasses look beautifully glossy, we recommend placing **ReflectionProbe** in your world.

:::tip Reference Site
Create an "Attractive" World by Placing Reflection Probes  
https://creator.cluster.mu/2022/03/22/misaka-1/
:::

### Support

If you encounter issues with setup or usage, please check the [Support & Contact](./support) page.

:::info FAQ and More
Detailed information including FAQ, update procedures, and troubleshooting is available on the [Support page](./support).
:::
