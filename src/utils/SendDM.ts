import {BaseChannel, GuildMember} from "discord.js";

export default await function SendDM(channel: BaseChannel, member: GuildMember) {
    member.send("")
}