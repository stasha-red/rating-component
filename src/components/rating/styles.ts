
import { css } from 'lit';

export default css`  
    .rating { 
        --rating-color-focus: #479EDD;

        --star-size-large: 48px;
        --star-size-medium: 40px;
        --star-size-small: 32px;

        --star-spacing-large: 18px;
        --star-spacing-medium: 8px;
        --star-spacing-small: 4px;

        --star-color-default: #E1E1E1;
        --star-color-active: #E7A93B;
        --star-color-disabled: #B8B8B7;

        display: inline-flex;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 4px;
    }

    .rating:focus-within {
        box-shadow: 0 0 0 4px var(--rating-color-focus);
    }
    
    .rating__input { 
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        margin: 0;
        white-space: nowrap;
        width: 1px;
    } 

    .rating__label { 
        color: var(--star-color-active); 
        overflow: hidden;
    }
    
    .rating--l .rating__label--right:not(:last-child) {
        margin-right: var(--star-spacing-large);
    }

    .rating--m .rating__label--right:not(:last-child) {
        margin-right: var(--star-spacing-medium);
    }

    .rating--s .rating__label--right:not(:last-child) {
        margin-right: var(--star-spacing-small);
    }

    .rating--l .rating__label {
        width: calc(var(--star-size-large) / 2);
        height: var(--star-size-large);
    }
    
    .rating--l .rating__label svg {
        width: var(--star-size-large);
        height: var(--star-size-large);
    }

    .rating--l .rating__label.rating__label--left svg {
        width: calc(var(--star-size-large) / 2);
    }

    .rating--m .rating__label {
        width: calc(var(--star-size-medium) / 2);
        height: var(--star-size-medium);
    }

    .rating--m .rating__label svg {
        width: var(--star-size-medium);
        height: var(--star-size-medium);
    }

    .rating--m .rating__label.rating__label--left svg {
        width: calc(var(--star-size-medium) / 2);
    }

    .rating--s .rating__label {
        width: calc(var(--star-size-small) / 2);
        height: var(--star-size-small);
    }

    .rating--s .rating__label svg {
        width: var(--star-size-small);
        height: var(--star-size-small);
    }

    .rating--s .rating__label.rating__label--left svg {
        width: calc(var(--star-size-small) / 2);
    }
    
    .rating:not(:disabled) .rating__input:checked ~ .rating__label { /* show gold star when clicked */
        color: var(--star-color-default);  
        cursor: pointer;
    } 

    .rating:not(:disabled) .rating__input:checked + .rating__label {
        color: var(--star-color-active);  
    }

    .rating:not(:disabled) .rating__input + .rating__label:hover, /* hover current star */
    .rating:not(:disabled):hover .rating__label:not(:hover):not(:hover ~ .rating__label) { /* hover previous stars */
        color: var(--star-color-active);  
        cursor: pointer;
        opacity: .7;
    }

    .rating.rating--inactive:disabled .rating__input:checked ~ .rating__label {
        color: var(--star-color-default); 
    } 
    
    .rating:not(.rating--inactive):disabled .rating__label {
        color: var(--star-color-disabled);  
    }

    .rating:disabled .rating__input:checked ~ .rating__label {
        color: var(--star-color-default);  
    } 
`;