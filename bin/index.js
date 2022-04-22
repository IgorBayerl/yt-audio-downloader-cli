#!/usr/bin/env node

import { Command } from 'commander';
import posts from "./commands/posts.js";

const program = new Command();

program.description("Access the JSON Placeholder API");
program.name("jsonp");
program.usage("<command>");
program.addHelpCommand(false);
program.helpOption(false);

program.parse(process.argv);

console.log(program.args);
if(!program.args.length) {
    console.log('show status and help');
    process.argv.push('dl')
}

const cPosts = program.command("dl")
cPosts.argument("[musicUrl]", "The URL of the music you want to download.")
cPosts.option("-p, --pretty", "Pretty-print output from the API.")
cPosts.description("Retrieve a list of all posts or one post by passing the post ID (e.g., posts 1).")
cPosts.action(posts);




program.parse(process.argv);



/*
To install the cli "npm install -g ."
to run "ymd"

*/