
export const getInputFile = ({id})=>{
    const div =  document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('type','file');
    input.setAttribute('id',id);
    div.append(input)
    return input;
}