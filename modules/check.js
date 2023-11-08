export function check(tab, task) {
    for (let i = 0; i <= tab.length; i++) {
        if (tab[i] === task) {
            return true;
        }
    }
}