/*
   ___   ______   ____  ____  _______          _        ______  
 .'   `.|_   _ `.|_  _||_  _||_   __ \        / \     .' ___  | 
/  .-.  \ | | `. \ \ \  / /    | |__) |      / _ \   / .'   \_| 
| |   | | | |  | |  \ \/ /     |  __ /      / ___ \  | |        
\  `-'  /_| |_.' /  _|  |_    _| |  \ \_  _/ /   \ \_\ `.___.'\ 
 `.___.'|______.'  |______|  |____| |___||____| |____|`.____ .' 

Bot version: 1.0
GitHub: https://github.com/Odyrac/SBSniper
YouTube: https://www.youtube.com/channel/UCzH8anDALXHJth2QfcbNINw
*/

const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'], ws: { intents: Intents.ALL } });
const fetch = require('node-fetch');

(async () => {
  await client.login('BOTTOKENHERE'); //change here
})();

client.on("ready", async () => {
  console.log(`${client.user.tag} online!`);
  client.user.setActivity('Sniper AH');
  const channel = client.channels.cache.get('CHANNELID'); //change here
  const message = await channel.messages.fetch('MESSAGEID'); //change here
  snipe(message.channel);

  async function snipe(channel, message) {
  
    let apiah = `https://api.hypixel.net/skyblock/auctions?key=APIKEYHERE&page=`; //change here

    //here put all the items you want to track
    let listeitem = ["Necron's Handle", "Implosion", "Shadown Warp", "Hyperion", "Chimera", "Diamond Necron Head", "Necron's Chestplate", "Shadow Assassin Chestplate", "Valkyrie", "Giant's Sword", "Hegemony Artifact", "Baby Yeti", "Catacombs Expert Ring", "Wither Artifact", "Wither Relic", "Treasure Artifact", "Hunter Ring", "Bait Ring", "Ender Artifact", "Personal Compactor 7000", "Storm's Chesplate", "Wither Chesplate", "Tier Boost Core", "Axe Of the Shredded", "Warden Helmet", "Bonemerang", "Reaper Orb", "Overload V", "Candy Relic", "Mosquito Bow", "Superior Dragon Boots", "Superior Dragon Leggings", "Superior Dragon Helmet", "Superior Dragon Chestplate", "Ultimate Carrot Candy Upgrade", "Shadow Fury", "Auto Recombobulator", "Warden Heart", "Shard of the Shredded", "Necromancer Lord Chestplate", "Neon Yellow Sheep Skin", "Neon Green Sheep Skin", "Neon Red Sheep Skin", "Neon Blue Sheep Skin", "Dark Wither Skeleton Skin", "Daedalus Axe", "Yeti Sword", "Ice Spray Wand", "Flower of Truth", "Livid Dagger", "Thick Sword of Revelations", "Spirit Sceptre", "Golden Jerry Artifact"];
    
    //here put the maximum price of the item (you will be pinged when this item is detected with a lower price)
    let maxprixitem = {
      "Necron's Handle": 500000000000,
      "Implosion": 0,
      "Shadown Warp": 0,
      "Hyperion": 0,
      "Chimera": 0,
      "Diamond Necron Head": 0,
      "Necron's Chestplate": 0,
      "Shadow Assassin Chestplate": 0,
      "Valkyrie": 0,
      "Giant's Sword": 0,
      "Hegemony Artifact": 0,
      "Baby Yeti": 0,
      "Catacombs Expert Ring": 0,
      "Wither Artifact": 0,
      "Wither Relic": 0,
      "Treasure Artifact": 0,
      "Hunter Ring": 0,
      "Bait Ring": 0,
      "Ender Artifact": 0,
      "Personal Compactor 7000": 0,
      "Storm's Chesplate" : 0,
      "Wither Chesplate" : 0,
      "Tier Boost Core" : 0,
      "Axe Of the Shredded" : 0,
      "Warden Helmet" : 0,
      "Bonemerang" : 0,
      "Reaper Orb" : 0,
      "Overload V" : 0,
      "Candy Relic" : 0,
      "Mosquito Bow" : 0,
      "Superior Dragon Boots" : 0,
      "Superior Dragon Leggings" : 0,
      "Superior Dragon Helmet" : 0,
      "Superior Dragon Chestplate" : 0,
      "Ultimate Carrot Candy Upgrade" : 0,
      "Shadow Fury" : 0,
      "Auto Recombobulator" : 0,
      "Warden Heart" : 0,
      "Shard of the Shredded" : 0,
      "Necromancer Lord Chestplate" : 0,
      "Neon Yellow Sheep Skin" : 0,
      "Neon Green Sheep Skin" : 0,
      "Neon Red Sheep Skin" : 0,
      "Neon Blue Sheep Skin" : 0,
      "Dark Wither Skeleton Skin" : 0,
      "Daedalus Axe" : 0,
      "Yeti Sword": 0,
      "Ice Spray Wand" : 0,
      "Flower of Truth" : 0,
      "Livid Dagger" : 0,
      "Thick Sword of Revelations" : 0,
      "Spirit Sceptre" : 0,
      "Golden Jerry Artifact" : 0
      //you MUST put a "," after each price EXCEPT for the last
    };

    while (true) {
      let initialResponse = await fetch(apiah + "1");
      if (initialResponse.ok) {
        const json = await initialResponse.json();
        let totalPages = json.totalPages
        for (let i = 0; i < totalPages; i++) {
          let currPage = apiah + i;
          const response = await fetch(currPage);
          if (response.ok) {
            let pageData = await response.json();
            totalPages = pageData.totalPages;
            snipeprocess(maxprixitem, pageData.auctions, listeitem, channel);
          }
          console.log(i);
        }
      }
      await new Promise(r => setTimeout(r, 35000));
    }
  }
  let dataitems = {};
  try {
    dataitems = require('./dataitems.json');
    dataitems.reforges = dataitems.reforge_string.split(" ");
    console.log("Loading information complete!");
  } catch (error) {
    console.log("Error during data loading.");
    dataitems.tiers = ["- Tier III", "- Tier II", "- Tier IV", "- Tier IX", "- Tier I", "- Tier VIII", "- Tier VII", "- Tier VI", "- Tier V", "- Tier XII", "- Tier XI", "- Tier X"];
    let reforge_string = "Very Highly Extremely Absolutely Perfect Gentle Odd Fast Fair Epic Sharp Heroic Spicy Legendary Fabled Suspicious Gilded Salty Treacherous Deadly Fine Grand Hasty Neat Rapid Unreal Awkward Rich Precise Spiritual Clean Fierce Heavy Light Mythic Pure Smart Titanic Wise Necrotic Spiked Renowned Cubic Warped Reinforced Loving Ridiculous Bizarre Itchy Ominous Pleasant Pretty Shiny Simple Strange Vivid Godly Demonic Forceful Hurtful Keen Strong Superior Unpleasant Zealous Silky Bloody Fruitful Magnetic";
    dataitems.reforges = reforge_string.split(" ");
    dataitems.bases = ["Dragon Helmet", "Dragon Chestplate", "Dragon Leggings", "Dragon Boots", "Helmet", "Chestplate", "Leggings", "Boots"];
  }
  
  function getBookBase(auction) {
    let lore = auction.item_lore;
    let base_name = lore.split("\n")[0];
    base_name = base_name.replace(/(§.)+/, '');
    return base_name;
  }

  function getdataitems(item_name, auction) {
    let tiers = dataitems.tiers;
    let reforges = dataitems.reforges;
    let bases = dataitems.bases;

    if (item_name === "Enchanted Book") {
      return getBookBase(auction);
    }

    let curr_name = item_name;
    curr_name = curr_name.replace(/✪*/g, "");

    for (let i = 0; i < tiers.length; i++) {
      curr_name = curr_name.replace(tiers[i], "");
    }

    let old_name = "";
    while (old_name != curr_name) {
      old_name = curr_name;
      for (let i = 0; i < reforges.length; i++) {
        let short = curr_name.replace(reforges[i], "").trim();
        if (short != curr_name) {
          if (bases.includes(short)) {
            return curr_name;
          } else {
            curr_name = short;
          }
        }
      }
    }
    return curr_name;
  }

  function annonceitem(item_name, item_price, maxprixitem, channel, uuid) {
    if (item_name in maxprixitem) {
      let expected_price = maxprixitem[item_name];
      let percentage = Math.floor((item_price / expected_price * 100) - 100);
      let embed = new MessageEmbed()
      .setTitle("__**New snipe:**__")
      .setThumbnail('https://i.imgur.com/guKc0bO.jpg')
      .setColor("#ca1818")
      .setDescription(`__**${item_name}**__ : ${item_price.toLocaleString('en')} (${percentage}%)\n\n↪️ __Type this command:__\n\`/viewauction ${uuid}\``)
      .setFooter("• Odyrac")
      console.log(percentage)
      if (percentage > -15) {
        console.log("We don't send a message because the profit percentage is too low.") //I put this option to prevent the spam bot from -1% if the price of the item drops in the AH
      } else {
        channel.send(`ping`) //@everyone or <@&ID-OF-ROLE> //change here
        channel.send(embed)
      };
    }
  }

  function snipeprocess(maxprixitem, auctions, listeitem, channel) {
    for (let j = 0; j < auctions.length; ++j) {
      let auction = auctions[j];
      if (auction.hasOwnProperty('bin')) {
        let item_name = getdataitems(auction.item_name, auction);
        let item_price = auction.starting_bid;
        let uuid2 = auction.uuid;
        const regex =/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/;
        let uuid = uuid2.replace(regex, '$1-$2-$3-$4-$5');
        for (let watched of listeitem) {
          if (watched === item_name) {
            if (maxprixitem[watched] > item_price) {
              annonceitem(item_name, item_price, maxprixitem, channel, uuid);
            }
          }
        }
      }
    }
  }
});