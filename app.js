const chalk = require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')

yargs.version('1.1.0');

//create a add command
yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        //console.log('Adding a new note!',argv)
        notes.addNote(argv.title,argv.body)
    }
})
//console.log(yargs.argv);

//create a remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        //console.log('Removing a note!')
        notes.removeNote(argv.title)
    }
})

//create a list command

yargs.command({
    command:'list',
    describe:'Add a list',
    handler(){
        notes.listNotes()
    }
})

//create a read command

yargs.command({
    command:'read',
    decribe:'Read a command',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})
console.log(yargs.argv);