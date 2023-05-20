require('dotenv').config();
const { ActionRowBuilder, ModalBuilder,  } = require('@discordjs/builders');
const { Webhook } = require('discord-webhook-node');

const { Discord } = require('discord.js');

const {ActivityType , Collection, Client, Events, GatewayIntentBits, EmbedBuilder, ButtonBuilder, ButtonStyle, TextInputBuilder, TextInputStyle, SlashCommandBuilder } = require('discord.js');
const PREFIX = "pig!"

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent] });

client.on("ready", c => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ activities: [{ name: `https://ipigtw.xyz`, type: ActivityType.Watching}], status: "online"})
})
client.on("messageDelete", async (message) => {
    if (message.author.bot) return;
    if (message.guild.id === 1087336891151548436) {
    const snipe = new EmbedBuilder()
    .setTitle("Message Deleted!")
    .setColor(0x0096ff)
    .setFields(
        {name: "Message Content", value: message.content},{
        name: "Message Author", value: message.author.tag, },
        { name: "Message ID", value: message.id, },
        { name: "Message Channel", value: message.channel.name, },
        {name: "Channel ID", value: message.channel.id, },
    )
    const channel = client.channels.cache.get("1095750887084924969").send({embeds: [snipe]})
    }
})
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.guild.id == 1087336891151548436) return;
    const hook = new Webhook(process.env.WEBHOOK)
    hook.setUsername(message.author.username)
    hook.setAvatar(message.author.displayAvatarURL())
    hook.send(message.content + " _ _")


})

client.login(process.env.TOKEN);