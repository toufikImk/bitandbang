#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Toufik Khattara /'),
  handle: chalk.cyan('Two Fik'),
  work: chalk.white('Freelance Full Stack Web Developer'),
  student: chalk.white('Computer Science'),
  community: chalk.white('Founder/Organizer @GDGGhardaia'),
  twitter: chalk.cyan('https://twitter.com/toufikimk'),
  github: chalk.cyan('https://github.com/toufikimk'),
  linkedin: chalk.cyan('https://linkedin.com/in/toufik-khattara'),
  npx: chalk.white('npx twofik'),
  labelWork: chalk.white.bold('    Work:'),
  labelStudies: chalk.white.bold(' Studies:'),
  labelCommunity: chalk.white.bold('Community:'),
  labelTwitter: chalk.white.bold('  Twitter:'),
  labelGitHub: chalk.white.bold('   GitHub:'),
  labelLinkedIn: chalk.white.bold(' LinkedIn:'),
  labelCard: chalk.white.bold(' Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const studying = `${data.labelStudies}  ${data.student}`
const volunteering = `${data.labelCommunity}  ${data.community}`

const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working +newline+ studying + newline+ volunteering+  newline + twittering + newline + githubing + newline + linkedining + newline + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
