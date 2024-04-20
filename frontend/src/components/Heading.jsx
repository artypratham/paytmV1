import PropTypes from 'prop-types';


export function Heading({label}) {
    
    return(
        <div className="font-bold text-4xl pt-6">
            {label}
        </div>
    )
}

// Define prop types
Heading.propTypes = {
    label: PropTypes.string.isRequired, // Required label prop
};