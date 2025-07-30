---
sidebar_position: 2
title: Setup Guide
description: Detailed installation and configuration instructions for Drinkable Alcoholic
---

# Setup Guide

This page explains the detailed installation procedure for "Drinkable Alcoholic FourthEdition".

## System Requirements

- Unity 2022.3.22f1
- VRChat SDK - Base 3.7.0 or higher
- VRChat SDK - World 3.7.0 or higher

## Installation Steps

### 1. Import Unitypackage

Import the `unitypackage` included in the extracted zip file into Unity.

### 2. Placing Prefabs

#### Procedure

1. Open the `Assets/TpLab/DrinkableAlcoholic/Prefabs/FourthEdition` folder in the **Project window**
2. Select the **Prefab** you want to use
3. Drag and drop it into the **Hierarchy** to place it

:::tip For Beginners

- Using **Sets** is convenient as it places both bottle and glass at once
- If you want to place them individually, choose from **Bottle** and **Glass**
  :::

#### Available Prefabs

| Category      | Prefab Name          | Description            | Notes                                     |
| ------------- | -------------------- | ---------------------- | ----------------------------------------- |
| 🍾 **Bottle** | RigelWhiskeyBottle   | Rigel Whiskey Bottle   | Combine with Rigel Whiskey Glass          |
|               | SagittariiWineBottle | Sagittarii Wine Bottle | Combine with Sagittarii Wine Glass        |
|               | MeropeWineBottle     | Merope Wine Bottle     | Combine with Merope Wine Glass            |
|               | RosaNebulaWineBottle | Rosa Nebula Bottle     | Combine with Rosa Nebula Glass            |
| 🥃 **Glass**  | RigelWhiskeyGlass    | Rigel Whiskey Glass    | Can be poured from Rigel Whiskey Bottle   |
|               | SagittariiWineGlass  | Sagittarii Wine Glass  | Can be poured from Sagittarii Wine Bottle |
|               | MeropeWineGlass      | Merope Wine Glass      | Can be poured from Merope Wine Bottle     |
|               | RosaNebulaWineGlass  | Rosa Nebula Glass      | Can be poured from Rosa Nebula Bottle     |
| 📦 **Set**    | RigelWhiskeySet      | Rigel Whiskey Set      | Bottle + Glass combination                |
|               | SagittariiWineSet    | Sagittarii Wine Set    | Bottle + Glass combination                |
|               | MeropeWineSet        | Merope Wine Set        | Bottle + Glass combination                |
|               | RosaNebulaWineSet    | Rosa Nebula Set        | Bottle + Glass combination                |

:::note Folder Structure

- **Bottles**: Inside `Bottle` folder
- **Glasses**: Inside `Glass` folder
- **Sets**: Inside main folder
  :::

:::warning Combination Notice

- **Whiskey Bottle** → Can pour into **Whiskey Glass**
- **Wine Bottle** → Can pour into **Wine Glass**
  :::

### 3. Glass Configuration

Configure settings in the Glass Inspector.

| Setting Item      | Description                                         | Setting Value     | Effect                         |
| ----------------- | --------------------------------------------------- | ----------------- | ------------------------------ |
| **TargetStreams** | Specify particle name that pours alcohol into glass | Particle name     | Responds to specific particles |
|                   |                                                     | `Size: 0`         | Responds to all particles      |
| **Pour Speed**    | Speed of pouring alcohol from bottle to glass       | Value (e.g., 1.0) | Higher value = faster pouring  |
| **Drink Speed**   | Speed of drinking alcohol when tilting glass        | Value (e.g., 1.0) | Higher value = faster drinking |

## Usage

### Basic Operation Steps

#### 🍾 Pouring from Bottle to Glass

1. **Pick up the bottle** - Grab the bottle in VR
2. **Hold Use button while** tilting the bottle
3. **Tilt over the glass** and liquid will be poured

:::info Compatible Combinations

- **Whiskey Bottle** → **Whiskey Glass**
- **Wine Bottle** → **Wine Glass**
  :::

#### 🥃 Drinking from Glass

1. **Pick up the glass** - Grab the glass in VR
2. **Tilt the glass** and the contents will sway
3. **Tilt further** and the contents will decrease

### Enhancing Visual Effects

To make the bottles and glasses look beautifully glossy, we recommend placing **ReflectionProbe** in your world.

:::tip Reference Site
Let's create a "stunning" world by placing Reflection Probe  
https://creator.cluster.mu/2022/03/22/misaka-1/
:::

### Support

If you have trouble with setup or usage, please check the [Support & Contact](./support) page.

:::info Frequently Asked Questions
Detailed information such as FAQ, update procedures, and troubleshooting is compiled on the [Support page](./support).
:::
