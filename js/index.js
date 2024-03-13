console.log('Module 6.1');

const itemTemplate = ({id, isDone, text}) => 
`<li data-id="${id}">
    <label for="">
        <input type="checkbox" ${isDone ? 'checked' : ''} />
        <span>${text}</span>
    </label>
</li>`;

const items = [
    { id: 1, text: 'sdfsd', isDone: false},
    { id: 2, text: 'hffg', isDone: true},
    { id: 3, text: 'assd', isDone: false},
    { id: 4, text: 'was', isDone: true},
    { id: 5, text: 'zxx', isDone: false}
];

const refs = {
    ul: document.querySelector('ul'),
    form: document.querySelector('form'),
};

const createList = () => {
    const list = items.map(itemTemplate).join('');

    refs.ul.innerHTML='';
    refs.ul.insertAdjacentHTML('beforeend', list);
};

const handleSubmit = (event) => {
    event.preventDefault();

    const text = event.target.elements.text.value;
    const newItem = {
        id: Date.now(),
        text,
        isDone: false,
    };

    items.push(newItem);
    createList();
    refs.form.reset();
};

refs.form.addEventListener('submit', handleSubmit);


createList();