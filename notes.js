const fs=require('fs')
const chalk=require('chalk')

//addNote function begins
const addNote = (title,body) =>{
    const notes=loadNotes()
    const duplicateNote = notes.find((note)=> note.title===title) //written so as it finds duplicate element it instantly stops and doesnt trace the whole array 
    //const duplicateNotes=notes.filter((note) => note.title===title)
    // const duplicateNotes=notes.filter(function(note){
    //     return (note.title===title)
    // })
    //debugger
    if(!duplicateNote)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    }
    else
    {
        console.log(chalk.red.inverse("Title already taken!"))
    }
    
}//addNote function ends

//RemoveNote function begins
    const removeNote=(title) =>{
        const notes=loadNotes()
        const notesToKeep=notes.filter((note)=>note.title!==title)
        // const notesToKeep=notes.filter(function(note){
        //     return note.title!==title
        // })
        
        if(notes.length>notesToKeep.length)
        {
            console.log(chalk.green.inverse("Note removed!"))
            saveNotes(notesToKeep)
        }
        else
        {
            console.log(chalk.red.inverse("Note not found"))
        }
        //saveNotes(notesToKeep)
    }
    //removeNote ends here


    //listNote function begins here
    const listNotes=()=>{
        const notes=loadNotes()
        console.log(chalk.inverse('Your notes'))
        notes.forEach((note)=>{
            console.log(note.title)
        })
    }//listNotes ends here


    //readNotes function begins here
    const readNotes =(title)=>{
        const notes=loadNotes()
        const note=notes.find((note)=>note.title===title)

        if(note){
            console.log(chalk.inverse(note.title))
            console.log(note.body)
        }else{
            console.log(chalk.red.inverse('Note not found!'))
        }
    }//readNote function ends here


    //saveNotes function begins here
const saveNotes=(notes)=>{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}//saveNote function ends here


//loadNotes function begins here
const loadNotes=()=>{

    try{
        const dataBuffer=fs.readFileSync('notes.json');
    const dataJson= dataBuffer.toString();
    return JSON.parse(dataJson)
}
catch(e){
        return []
    }
}//loadNote function ends here

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}