import PropTypes from 'prop-types';


export function Button({label, onClick}) {
    return(
        <div>
            <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 " onClick={onClick}>{label}</button>
        </div>
    )
}


// Define prop types
Button.propTypes = {
    label: PropTypes.string.isRequired, // Required label prop
    onClick : PropTypes.func.isRequired
};