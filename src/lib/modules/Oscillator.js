import { CONST } from '../core/Constants'
import AudioContext from '../AudioContext'
import SoundSource from '../core/SoundSource'

class Oscillator extends SoundSource {

    constructor (props) {
        super(props);

        this.main = AudioContext.createOscillator();
        this.main.type = props.type || CONST.WAVE_SINE;
        this.main.detune.value = props.detune || 0;
        this.main.connect(this.gain);
    }

    setNote (note) {
        this.main.frequency.value = note;
    }

    getLineIn () {
        return this.main.frequency;
    }
}

export default Oscillator;
