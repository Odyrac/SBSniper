# Bot Discord SkyBlock Sniper

<div style="display: flex; align-items: center; justify-content: space-between;">
<img src="https://user-images.githubusercontent.com/85808136/130417540-74fce1ae-a0ac-4e90-bd91-376b37c3ba30.png" width="300" height="300">
<img src="https://user-images.githubusercontent.com/85808136/130759660-20130175-e1ed-4988-96b2-807f91c1869b.png" width="450" height="200">
</div>

## 🇫🇷
- Explications :

Le SkyBlock est un mode de jeu du célèbre serveur Minecraft **Hypixel**. Dans cette sorte de survie moddée, un hôtel des ventes est disponible où les joueurs effectuent du commerce.

Lorsqu'un joueur met en vente un item, il est possible qu'il se **trompe** et mette un prix très bas (une faute de frappe par exemple). J'ai justement créé ce bot Discord afin de `"sniper"` ce genre d'erreur.

- Fonctionnement :

Le bot scan en continu l'hotêl des ventes (AH) et vous envoie un message dès qu'un item est détecté en-dessous de son prix associé.

Par exemple, imaginons que j'associe un diamant au prix de 10 coins. Si un joueur se trompe et met en vente un diamant pour 1 coin, le bot me prévient et me donne une **commande** à exécuter qui m'affichera alors directement l'auction. Je pourrai donc acheter ce diamant à un prix très faible.

En réalité le bot n'envoie pas un message dès qu'il trouve un item en dessous de son prix associé mais plutôt dès qu'il en trouve un qui a au minimum -15% de bénéfices. J'ai mis ce palier pour éviter que le bot spam des -1% si le prix à l'AH de l'item en question chute.

> **Note :** Pour savoir comme **installer le bot**, regardez ma vidéo explicative en cliquant  [ici](https://youtu.be/LxH9-QhwYJU).

🤝 Un grand merci à toutes les personnes qui m'ont accompagné dans la construction de ce bot, connaisseurs en SkyBlock, testeurs, etc... Merci à `Pepsi` pour l'aide côté Java sur le mod-ig.

⚠️ J'ai refais **entièrement** le code du bot pour qu'il soit le plus simplifié possible et facile à installer. Il ne sera pas le plus optimisé par rapport à d'autres bots de ce genre ! De plus, je n'ai volontairement pas respecté certaines habitudes de développeur pour faciliter son utilisation et sa compréhension de tous.

ℹ J'ai commencé à développer ce bot à mes débuts dans la programmation. Je me suis donc appuyé sur divers ressources vues sur Internet que j'ai ensuite améliorées/modifiées pour aboutir à ce projet. Certaines parties du code peuvent avoir été récupérées d'autres projets.

## 🇬🇧 
- Explanations:

SkyBlock is a game mode of the famous Minecraft **Hypixel** server. In this sort of modded survival, an auction house is available where players trade.

When a player sells an item, it is possible that he is **mistaken** and put a very low price (a typo for example). I just created this Discord bot in order to `"snip"` this kind of error.

- Functioning :

The bot continuously scans the sales hotel (AH) and sends you a message as soon as an item is detected below its associated price.

For example, let's say I match a diamond with the price of 10 coins. If a player makes a mistake and sells a diamond for 1 coin, the bot warns me and gives me a **command** to execute which will then show me the auction directly. So I will be able to buy this diamond at a very low price.

In reality the bot does not send a message as soon as it finds an item below its associated price but rather as soon as it finds one that has at least -15% profit. I have set this level to prevent the bot spam from -1% if the AH price of the item in question drops.

> **Note:** To know how to **install the bot**, watch my explanatory video by clicking [here](https://youtu.be/LxH9-QhwYJU). *The video is in French.*

🤝 A big thank you to all the people who helped me build this bot, SkyBlock connoisseurs, testers, etc... Thanks to `Pepsi` for the Java side help on the mod-ig.

⚠️ I redid **entirely** the bot code to make it as simplified as possible and easy to install. It will not be the most optimized compared to other robots of this kind! In addition, I have intentionally not respected certain development habits to facilitate its use and understanding of all.

ℹ I started developing this bot when I was just starting out in programming. I therefore relied on various resources seen on the Internet that I then improved / modified to lead to this project. Parts of the code may have been taken from other projects.
