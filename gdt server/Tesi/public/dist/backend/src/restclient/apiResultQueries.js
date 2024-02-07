"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ApiCalculation {
    constructor() {
        /** (5.5.1)testato
         * Un sistema di prodotto viene calcolato per un singolo valore di domanda per un flusso della tecnosfera:
         * un prodotto in uscita o un input di rifiuti del sistema. È il riferimento quantitativo del sistema.
         * Nel caso generale, un sistema può avere più valori di domanda organizzati in un
         * vettore di domanda finale f che è indicizzato allo stesso modo della matrice tecnologica (si noti che un sistema a domanda multipla
         * può essere trasformato in un sistema a domanda singola semplicemente aggiungendo un colonna di processo aggiuntiva alla matrice tecnologica).
         *
         * @param {String} vps - Indirizzo della vps del db a cui ci colleghiamo.
         * @param {String} idCalcolo - Identificativo del calcolo di un product system.
         * @returns {Json} - Json che contiene informazioni sui flussi della tecnosfera.
         */
        this.getRichiestaFinale = (vps, idCalcolo) => __awaiter(this, void 0, void 0, function* () {
            try {
                let url = vps + "result/" + idCalcolo + "/demand";
                console.log(url);
                let resp = yield fetch(url);
                let v = yield resp.json();
                return v;
            }
            catch (error) {
                console.error('Errore durante la connessione:', error);
            }
        });
        /** (5.5)testato
         * Questo metodo restituisce gli n flussi di tecnosfera di un risultato. Questi
         * sono i flussi attraverso i quali sono collegati i processi del sistema calcolato.
         * Ogni flusso della tecnosfera è una coppia di un prodotto o flusso di rifiuti e
         * un fornitore in cui il fornitore è tipicamente un processo ma può anche essere un sistema di prodotto
         * (un sottosistema) o anche un altro risultato.
         *
         * @param {String} vps - Indirizzo della vps del db a cui ci colleghiamo.
         * @param {String} idCalcolo - Identificativo del calcolo di un product system.
         * @returns {Json} - Json che contiene informazioni sui flussi della tecnosfera.
         */
        this.getTechnosphereFlows = (vps, idCalcolo) => __awaiter(this, void 0, void 0, function* () {
            try {
                let url = vps + "result/" + idCalcolo + "/tech-flows";
                console.log(url);
                let resp = yield fetch(url);
                let v = yield resp.json();
                return v;
            }
            catch (error) {
                console.error('Errore durante la connessione:', error);
            }
        });
        /** (5.6) testato
         * Questo metodo restituisce i flussi di intervento m di un risultato.
         * Questi sono i flussi che attraversano il confine con l'ambiente del sistema calcolato
         * (ecco perché il nome abbreviato è EnviFlow nell'API). Nei calcoli regionalizzati questi flussi possono essere coppie di flussi e luoghi,
         * lo stesso flusso può verificarsi in luoghi diversi (con fattori di caratterizzazione possibilmente diversi).
         *
         * @param {String} vps - Indirizzo della vps del db a cui ci colleghiamo.
         * @param {String} idCalcolo - Identificativo del calcolo di un product system.
         * @returns {Json} - Json che contiene informazioni sui flussi della tecnosfera.
         */
        this.getInterventionFlows = (vps, idCalcolo) => __awaiter(this, void 0, void 0, function* () {
            try {
                let url = vps + "result/" + idCalcolo + "/envi-flows";
                console.log(url);
                let resp = yield fetch(url);
                let v = yield resp.json();
                return v;
            }
            catch (error) {
                console.error('Errore durante la connessione:', error);
            }
        });
        /** (5.7)
         * Questo metodo restituisce le categorie di impatto di un risultato.
         * Le righe della matrice di impatto C sono indicizzate in base a queste categorie
         * di impatto e le colonne in base agli m flussi di intervento del sistema.
         * C contiene i rispettivi fattori di caratterizzazione dei flussi di intervento.
         *
         * @param {String} vps - Indirizzo della vps del db a cui ci colleghiamo.
         * @param {String} idCalcolo - Identificativo del calcolo di un product system.
         * @returns {Json} - Json che contiene informazioni sui flussi della tecnosfera.
         */
        this.getImpactCategories = (vps, idCalcolo) => __awaiter(this, void 0, void 0, function* () {
            try {
                let url = vps + "result/" + idCalcolo + "/impact-categories";
                console.log(url);
                let resp = yield fetch(url);
                let v = yield resp.json();
                return v;
            }
            catch (error) {
                console.error('Errore durante la connessione:', error);
            }
        });
    }
}
exports.default = ApiCalculation;
