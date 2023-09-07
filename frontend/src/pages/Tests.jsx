const TestTable = [
    {
        id:1,
        name:'Tester',
        number:123
    },
    {
        id:2,
        name:'Lester',
        number:456
    },
]

const AnotherTable = [
    {
        id:1,
        name:'Jester',
        number:789
    }
]
//Finds duplicates from Table with Key that's value equals to toFind
function GetDuplicate(Table, Key, toFind){
    //console.log(Table, Key, toFind)
    const Find = Table.find(data=>data[Key]===toFind)
    console.log(Find)
    return Find
}
//Gets next ID possible from Table
const GetID = (Table) => {
    const Max = Table.length > 0 ? Math.max(...Table.map(n=>n.id)) : 0
    return Max + 1
}

export default function Tests(){
    return(
        <div>
            <button onClick={() => {
                let Dupe = GetDuplicate(TestTable, 'name', 'Gester')
                console.log('Dupe result: '+Dupe)
            }}>Just testing :)</button>
        </div>
    )
}