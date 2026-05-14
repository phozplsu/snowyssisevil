class VLPlayer {

    constructor(config){

        this.id = config.id;
        this.src = config.src;

        this.build();

    }

    build(){

        this.id.html(`
            <div class="vlPlayer2007">

                <div class="vlVideoArea">
                    <div class="rufflePlayer"></div>
                </div>

                <div class="vlControls">

                    <button class="vlBtn">⏮</button>
                    <button class="vlBtn">▶</button>

                    <div class="vlBar">
                        <div class="vlProgress"></div>
                    </div>

                    <div class="vlTime">
                        00:03 / 00:18
                    </div>

                    <button class="vlBtn">🔊</button>
                    <button class="vlBtn">▣</button>

                </div>

            </div>
        `);

        this.loadSWF();

    }

    loadSWF(){

        window.RufflePlayer = window.RufflePlayer || {};

        const ruffle = window.RufflePlayer.newest();

        const player = ruffle.createPlayer();

        player.style.width = "100%";
        player.style.height = "100%";

        this.id.find(".rufflePlayer")[0].appendChild(player);

        player.load(this.src);

    }

}