+++
date = '2026-06-03T11:07:21+02:00'
draft = false
title = 'Test'
+++
# LodeStone

Don't lose your friends with this GPS LoRa P2P compass!

---

## The Idea 

### Where it came from
Just recently my district's fair started, and between all the crowds and the size of the fairgrounds It's pretty hard to find my friends, especially when we get separated, so with that and me playing a bunch of Minecraft this idea of a Mesh LoRa P2P compass came about.

The name is a reference to the lodestone block in Minecraft which lets you set custom compass targets.

---

### Features

- [ ] Compass like display pointing at the other nodes in the mesh network
- [ ] Top down map-like view of all nodes in the network
- [ ] Encrypted location data 
- [ ] Gesture based navigation using the gyroscope and accelerometer
- [ ] Short messages (Using some sort of keyboard using the gestures, or morse code)
- [ ] Heavily optimized battery life

---

### How would it work?
The device consists of 7 components:
- Seeed Studio XIAO ESP32 S3 (As the brains of the device)
- Seeed Studio Lora32 SX1262 (For LoRa)
- Seeed Studio L76K GNSS Module (For GPS)
- GY-9250 BMP085 Module (For Accelerometer, Gyroscope and an actual compass)
- GC9A01 Round TFT screen 
- 503040 600mAh Battery
- Flexible antenna for the gps module (The standard ceramic one that comes with the module is far too bulky)

#### Connectivity 

The idea is that each node connects to each other individually or in groups, working simultaneously.

Pairing is done by a gesture password consisting of holds and taps, basically a morse code pin. You pair your devices using the same pin, then they handshake, share keys, and establish a connection.

Even if they are not paired (and if enabled), nodes retransmit incoming data packets to other users in the network to increase range.

#### Display 

The compass and map are drawn by taking GPS data from both nodes and the GY-9250 compass and accelerometer to calculate the direction the other node is at.

#### Battery

To optimize battery life and not saturate the airwaves, my system uses a Supply-demand approach. When the node (as a pendant or in the pocket) is still and facing away from the user, it is just listening for either location packets or a request packet. If it receives a location packet, it will update that node's location in memory and nothing else. If it receives a request packet, it will send its own location.

When the node is pulled up to be viewed, it will send a request packet to other nodes to update their location in memory, and a location packet so other nodes update it's location. It will do this at customizable intervals of time while it is being viewed. For signal integrity, the sending node must receive a confirmation packet back to ensure the transmission was successful. This workflow keeps battery usage to a minimum.

I still think it should ping at a set interval to guarante some type of connection, since maybe I can recieve my friends location, but he can't recieve my request so I knever know were he is
this could be also tied to speed using the accelerometer, this meaning, the more they move the more they send, if they are still it will default to some configurable interval

We could also tune transmition gain baised on distance, with some headroom of course

#### Interface

To maintain a compact formfactor, interaction with the node will be based on gestures, using the GY-9250 accelerometer and gyro.

Some of this gestures could be:
-   Tap/Double Tap
-   Shake
-   Tilt right/left/up/down

The menus would be similar to a smart watch.

#### Messaging

We can leverage our LoRa connection to send quick preconfigurable messages or write one at that moment using a gesture keyboard or morse code.

In the future I may develop an app to make this easier (tbh just use meshtashtic or meshcore atp), but this is intended for short notification like messages.

I would also like to add an SOS function that sends a signal to all nodes paired, or even if enabled on both ends, all nodes in the network, this will make the nodes flash red and highlight the SOS'ing node.

#### PCB (?)

While I want to make the project as accessible as posible by using off the shelf components, In the future, to heavily reduce the size I would like to look towards making my own PCB, after all the software is finished and hardware proves to be capable, this could also lead to me selling the product, since this design would be more consumer friendly than the maker module version. Of course, still Open Source

#### 3D printed case

I will make a 3D printed case, as small and tight as possible for it to be portable and comfortable, of course anyone could design their own cases, this includes an optimized case for the future PCB for when that is designed.

#### FOSS and modularity

I would like this project to be modular and community focused, so I encourage colaboration integrating for example:
-   Other ESP or microcontroller models
-   Other screens
-   Extra input components
-   Other IMU

etc.. all from the same modular firmware.

[hello.com](https://hello.com)



```python
print("tuff")
```