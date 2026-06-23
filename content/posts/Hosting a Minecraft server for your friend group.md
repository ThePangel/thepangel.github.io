+++
date = '2026-06-23T14:36:12+02:00'
draft = false
title = "Self-hosting my friend group's 2-week Minecraft phase"
+++

# How I self-hosted my friend group's 2-week Minecraft phase

So my friends and I had that itch for a 2-week Minecraft phase, so naturally, like in the past, I was in charge of handling the server, so I'll tell you all how I set it up. (Java and Bedrock crossplay!)

# The hardware

The server is running on my Raspberry Pi 5 8GB, since it's the only spare computer I have, as a bonus it has a relatively low power consumption.

I have it connected by Ethernet directly to my router, and everything is on a 256GB microSD. I also have the official fan.

I have the Pi running Headless PiOS Lite 64bit

# Software Stack

First I started by downloading and running the frontend [Crafty Controller](https://craftycontrol.com/), tbh I should have used the docker Image (which I have used in the past), but I installed it directly.

From Crafty I created a Paper Server running 26.1.2 (latest version at server creation). I chose paper, because tbh It's the only server software I have ever used, It's proven and stable, but, I may test out or fully switch to a fabric server in the near future, because it doesn't tweak vanilla like paper, and some server side mods sync better with my fabric client side mods (JEI, xaeros map, etc), will post abt that if I do it.

Then I proceeded to install some required plugins, and some convenient ones

## [Paper/Bukkit plugins](https://modrinth.com/collection/7Tbm2ihr)   

-   Paper Plugins (1):
    - JEIRecipeBridge
-   Bukkit Plugins (12):
    - DiscordSRV, Essentials, floodgate, Geyser-Spigot, LuckPerms, Maintenance, PVPClumps, ServerListPlus, SkinsRestorer, voicechat, WorldEdit

Lets go 1 by 1 and explain what they do and why I added them.

### [JEIRecipeBridge](https://modrinth.com/plugin/jei-recipe-bridge) by Mrbysco
Since Minecraft 1.21.2+, recipes are stored on the server only, so for me and my JEI using friends, this is a no brainer

### [DiscordSRV](https://modrinth.com/plugin/discordsrv) by Sracrz, granny and Vankka

This adds seamless integration between the Minecraft server and the discord server, allowing my friends to check current server status, use the ingame chat directly from discord, verify accounts with linking, prox-chat and more I don't use.

If you plan to have a Discord server specifically for your friends Minecraft server, this is a no brainer, to add that bit of polish and convenience 

### [EssentialsX](https://modrinth.com/plugin/essentialsx) by mdcfe, JRoy and pop4959
Not to be confused with the Essential mod, this plugin adds a bunch of QOL and convenience commands, like /tpask, /home and more, which makes our social server lower friction, also for me the admin, makes managing stuff easier with some commands.

If you dont mind these types of commands and don't think they ruin the experience, I recommend it, we found it comfortable and very useful.

### [Floodgate and Geyser](https://geysermc.org/) by GeyserMC
I have bundled these together because one is nothing without the other.

This is by far the most important plugin of all, and outright magical.
Geyser allows bedrock clients to connect to a java server, essentially adding cross-play.

Floodgate lets bedrock users join without having to own a Java account aswell, which are most bedrock users, and all my friends.

These two plugins allow all my PS4/5 and PE friends join the server and play with java users seamlessly, of course the server is still a Java server, so all mechanics are Java mechanics, this may take so time to get used to for bedrock players.

### [LuckPerms](https://modrinth.com/plugin/luckperms) by lacko

LuckPerms is my permission plugin of choice, It alows me as the admin to grant command and other permissions to the player.

I use this to give my friends access to certain commands like /home or /tpask, without giving everyone OP.

### [Maintenance](https://modrinth.com/plugin/maintenance) by kennytv
This plugin allows me to set the server in a maintenance mode where only I can enter, and the users will see that the server is under maintenance on the server list.

This way I can peacefully fix any issue on the server and the players know whats going on.

### [PVPClumps](https://modrinth.com/plugin/pvp-clumps/gallery) by Spog 
This just clumps up XP t reduce lag and make xp collection in farms quicker.

### [ServerListPlus](https://www.spigotmc.org/resources/serverlistplus.241/) by Minecrell
This plugin lets me fully and with a lot of detail customise the server MOTD dynamically to whatever I desire, really fun and cool

### [SkinRestorer](https://modrinth.com/plugin/skinsrestorer) by SkinRestorer Team
This plugin enables me to add skins to cracked and bedrock players, because in an offline server, since there is no account verification, skins are not fetched. 

This plugin restores the skins of paid minecraft accounts like mine automatically, and lets you give any player any skin seamlessly, I use this to set all of my friends skins

### [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat)
This mod is both simple and cool, and also self explanatory, it adds a voice chat to the game, this way me and my java friends can scream at eachother in game.

This is better than discord because its real prox chat, and 3D audio best on the player position, so I highly recommend.
### [WorldEdit](https://modrinth.com/plugin/worldedit) by EngineHub
We all know world edit, a quick way to make mass edits, its really good.

I only used it to completelly vanish a chunk as a prank, but I added it as a useful admin tool.

# Network setup

This is all fine and dandy but how do people connect to my machine, on my network.

Well first I have a domain on Cloudflare dynamically (ddns) pointing to my home IP, on my router I have port ``6741 TCP`` open for Java, ``19132 UDP`` for bedrock and ``24454 UDP`` for Simple Voice chat.

It is much better practice to proxy this trough a vps, but I dont have that kind of money

Yeah that it, pretty easyyyy.

That's the end! Thanks for reading, good luck on your 2-week adventures. 
73

(feel free to leave a comment)