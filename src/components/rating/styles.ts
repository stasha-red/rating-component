
import { css } from 'lit';

export default css`  
    .rating { 
        --rating-size: medium;

        --rating-color-focus: #479EDD;
        --rating-padding-large: 16px;
        --rating-padding-medium: 12px;
        --rating-padding-small: 8px;
        
        --star-size-large: 48px;
        --star-size-medium: 40px;
        --star-size-small: 32px;

        --star-spacing-large: 24px;
        --star-spacing-medium: 16px;
        --star-spacing-small: 8px;

        --star-color-default: #E1E1E1;
        --star-color-active: #E7A93B;
        --star-color-disabled: #B8B8B7;

        display: inline-block;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 4px;
    }

    .rating:focus-within {
        box-shadow: 0 0 0 4px var(--rating-color-focus);
    }

    .rating--large {
        padding: var(--rating-padding-large);
    }

    .rating--medium {
        padding: var(--rating-padding-medium);
    }

    .rating--small {
        padding: var(--rating-padding-small);
    }
    
    .rating__input { 
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    } 

    .rating__label { 
        float: right; 
        color: var(--star-color-default); 
    }
    
    .rating--large .rating__label:not(.rating__label--half):not(:nth-child(2)) {
        padding-right: var(--star-spacing-large);
    }

    .rating--medium .rating__label:not(.rating__label--half):not(:nth-child(2)) {
        padding-right: var(--star-spacing-medium);
    }

    .rating--small .rating__label:not(.rating__label--half):not(:nth-child(2)) {
        padding-right: var(--star-spacing-small);
    }

    .rating__label svg {      
        display: inline-block;
    }

    .rating__label--half svg { 
        position: absolute;
    }

    .rating--large .rating__label svg {
        width: var(--star-size-large);
        height: var(--star-size-large);
    }

    .rating--large .rating__label.rating__label--half svg {
        width: calc(var(--star-size-large) / 2);
    }

    .rating--medium .rating__label svg {
        width: var(--star-size-medium);
        height: var(--star-size-medium);
    }

    .rating--medium .rating__label.rating__label--half svg {
        width: calc(var(--star-size-medium) / 2);
    }

    .rating--small .rating__label svg {
        width: var(--star-size-small);
        height: var(--star-size-small);
    }

    .rating--small .rating__label.rating__label--half svg {
        width: calc(var(--star-size-small) / 2);
    }
    
    .rating:not(:disabled) .rating__input:checked ~ .rating__label, /* show gold star when clicked */
    .rating:not(:disabled) .rating__input:not(:checked) + .rating__label:hover, /* hover current star */
    .rating:not(:disabled) .rating__input:not(:checked) + .rating__label:hover ~ .rating__label { /* hover previous stars */
        color: var(--star-color-active);  
        cursor: pointer;
    } 

    .rating.rating--inactive:disabled .rating__input:checked ~ .rating__label {
        color: var(--star-color-active); 
    } 
    
    .rating:disabled .rating__input:checked ~ .rating__label {
        color: var(--star-color-disabled);  
    } 
`;