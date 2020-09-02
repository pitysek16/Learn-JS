import '../css/style.css';
import locations from './store/location';
import './plugins';
import formUI from './views/form';
import currencyUI from'./views/currency';
import ticketsUI from './views/tickets'


document.addEventListener('DOMContentLoaded', () => {
   
    const form = formUI.form;

    //Events
    initAPP();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        onFormSubmit();
    })


    // Handlers
    async function initAPP(){
        await locations.init();
        formUI.setAutoCompleteDate(locations.shortCitiesList)
    }

    async function onFormSubmit(){
        const origin = locations.getCityCodeByKey(formUI.originValue);
        const destination = locations.getCityCodeByKey(formUI.destinationValue);
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue;
        const currency = currencyUI.currencyValue

        await locations.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency
        });

        console.log('dd:', locations.lastSearch);
        ticketsUI.renderTickets(locations.lastSearch);
    }
})