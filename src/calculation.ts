class Calculation {
    makeCalculation(from: string, to: string, weight: number) {
        let result;
        if (from === 'Tons') {
            switch (from === 'Tons') {
                case to === 'Kilograms': result = weight * 1000;
                    break;
                case to === 'Grams': result = weight * 1000 * 1000;
                    break;
                case to === 'Milligrams': result = weight * 1000 * 1000 * 1000;
                    break;
                case to === 'Pounds': result = weight * 2000;
                    break;
                case to === 'Ounces': result = weight * 32000;
                    break;
                case to === 'Tons': result = weight;
                    break;
            }
            return result;
        } else if (from === 'Kilograms') {
            switch (from === 'Kilograms') {
                case to === 'Tons': result = weight / 1000;
                    break;
                case to === 'Grams': result = weight * 1000;
                    break;
                case to === 'Milligrams': result = weight * 1000 * 1000;
                    break;
                case to === 'Pounds': result = weight * 2.20462262;
                    break;
                case to === 'Ounces': result = weight * 35.2739619;
                    break;
                case to === 'Kilograms': result = weight;
                    break;
            }
            return result;
        } else if (from === 'Grams') {
            switch (from === 'Grams') {
                case to === 'Tons': result = weight / 1000 / 1000;
                    break;
                case to === 'Kilograms': result = weight / 1000;
                    break;
                case to === 'Milligrams': result = weight * 1000;
                    break;
                case to === 'Pounds': result = weight * 0.00220462262;
                    break;
                case to === 'Ounces': result = weight * 0.0352739619;
                    break;
                case to === 'Grams': result = weight;
                    break;
            }
            return result;
        } else if (from === 'Milligrams') {
            switch (from === 'Milligrams') {
                case to === 'Tons': result = weight / 1000 / 1000 / 1000;
                    break;
                case to === 'Kilograms': result = weight / 1000 / 1000;
                    break;
                case to === 'Grams': result = weight / 1000;
                    break;
                case to === 'Pounds': result = weight * 0.00000220462262;
                    break;
                case to === 'Ounces': result = weight * 0.0000352739619;
                    break;
                case to === 'Milligrams': result = weight;
                    break;
            }
            return result;
        } else if (from === 'Pounds') {
            switch (from === 'Pounds') {
                case to === 'Tons': result = weight / 2000;
                    break;
                case to === 'Kilograms': result = weight / 2.20462262;
                    break;
                case to === 'Grams': result = weight / 0.00220462262;
                    break;
                case to === 'Milligrams': result = weight / 0.00000220462262;
                    break;
                case to === 'Ounces': result = weight * 16;
                    break;
                case to === 'Pounds': result = weight;
                    break;
            }
            return result;
        } else if (from === 'Ounces') {
            switch (from === 'Ounces') {
                case to === 'Tons': result = weight / 32000;
                    break;
                case to === 'Kilograms': result = weight / 35.2739619;
                    break;
                case to === 'Grams': result = weight / 0.0352739619;
                    break;
                case to === 'Milligrams': result = weight / 0.0000352739619;
                    break;
                case to === 'Pounds': result = weight / 16;
                    break;
                case to === 'Ounces': result = weight;
                    break;
            }
            return result;
        }
    }
}

export const calculation = new Calculation();