<template>
    <div>
        <form>
            <h1>Input the missing number</h1>
            <div class="form-group row">
                <div class="col-sm-1">
                    <input type="number" class="form-control" name="firstF" v-model="first.firstF">
                </div>
                <div class="col-sm-1">
                    <input type="number" class="form-control" name="firstS" v-model="first.firstS">
                </div>
                <div class="col-sm-1">
                    <input type="number" class="form-control" name="firstT"  v-model="first.firstT">
                </div>
            </div> -
            <div class="form-group row">
                <div class="col-sm-1">
                    <input type="number" class="form-control" name="secondF" v-model="second.secondF">
                </div>
                <div class="col-sm-1">
                    <input type="number" class="form-control" name="secondS" v-model="second.secondS">
                </div>
                <div class="col-sm-1">
                    <input type="number" class="form-control" name="secondT" v-model="second.secondT">
                </div>
            </div> =
            <div class="form-group row">
                <div class="col-sm-1">
                    <input type="number" class="form-control" name="resultF" v-model="result.resultF">
                </div>
                <div class="col-sm-1">
                    <input type="number" class="form-control" name="resultS" v-model="result.resultS">
                </div>
                <div class="col-sm-1">
                    <input type="number" class="form-control" name="resultT" v-model="result.resultT">
                </div>
            </div>
            <div class="form-group">
                <label>One unknown at the beginning </label>
                <input type="radio"  v-model="mode" id="first" value="first" @change="changeMode(mode)">

                <label>One unknown in the middle</label>
                <input type="radio"  v-model="mode" id="middle" value="middle" @change="changeMode(mode)">

                <label>One unknown at the end</label>
                <input type="radio"  v-model="mode" id="last" value="last" @change="changeMode(mode)">

            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="resultSum">Calculate/Check result</button>
        </form>

        <div v-show="correct">
            <p>Well done</p>
        </div>
        <div v-show="!correct && submitted">
            <p>Try again</p>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Subtraction",
        data () {
            return {
                first: {
                    firstF: Math.round(Math.random() * 10) + 6,
                    firstS: Math.round(Math.random() * 10) + 6,
                    firstT: Math.round(Math.random() * 10) + 6
                },
                second: {
                    secondF: Math.floor(Math.random() * 8) + 1,
                    secondS: Math.floor(Math.random() * 8) + 1,
                    secondT: Math.floor(Math.random() * 8) + 1
                },
                result: {
                    resultF: null,
                    resultS: null,
                    resultT: null
                },
                mode: '',
                correct: false,
                submitted: false
            }
        },
        methods: {
            changeMode(mode) {
                let secondNumber = "";
                switch (mode) {
                    case 'first':
                        this.second.secondF = null;
                        this.second.secondS = Math.floor(Math.random() * 9) + 1;
                        this.second.secondT = Math.floor(Math.random() * 9) + 1;
                        secondNumber = "".concat(Math.floor(Math.random() * 9) + 1, this.second.secondS , this.second.secondT);
                        break;
                    case 'middle':
                        this.second.secondF = Math.floor(Math.random() * 9) + 1;
                        this.second.secondS = null;
                        this.second.secondT = Math.floor(Math.random() * 9) + 1;
                        secondNumber = "".concat(this.second.secondF , Math.floor(Math.random() * 9) + 1 , this.second.secondT);
                        break;
                    case 'last':
                        this.second.secondT = null;
                        this.second.secondF = Math.floor(Math.random() * 9) + 1;
                        this.second.secondS = Math.floor(Math.random() * 9) + 1;
                        secondNumber = "".concat(this.second.secondF , this.second.secondS , Math.floor(Math.random() * 9) + 1);
                        break;
                }
                let firstNumber = "".concat(this.first.firstF ,this.first.firstS ,this.first.firstT);
                let subtraction = parseInt(secondNumber) + parseInt(firstNumber);
                subtraction = subtraction.toString().split("");
                if (subtraction.length > 3) {
                    this.result.resultF = subtraction[0].concat(subtraction[1]);
                    this.result.resultS = subtraction[2];
                    this.result.resultT = subtraction[3];
                } else {
                    this.result.resultF = subtraction[0];
                    this.result.resultS = subtraction[1];
                    this.result.resultT = subtraction[2];
                }


            },
        }
    }
</script>

<style scoped>

</style>