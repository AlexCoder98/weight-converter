class Button {
    button: HTMLButtonElement;

    constructor(selector: string) {
        this.button = document.querySelector(selector)! as HTMLButtonElement;
    }
}

class ConvertButton extends Button {
    constructor(selector: string) {
        super(selector);
    }
}

class ResetButton extends Button {
    constructor(selector: string) {
        super(selector);
    }
}

export const convertButton = new ConvertButton('[data-convert]');
export const resetButton = new ResetButton('[data-reset]');