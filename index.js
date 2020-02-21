'use strict';
const line = require('@line/bot-sdk');
const express = require('express');
var request = require("request");

// create LINE SDK config from env variables
const config = {
   channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
   channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express: https://expressjs.com/
const app = express();

app.get('/', (req, res) => {
    res.send('Res send!');
  });
  
  // register a webhook handler with middleware
  // about the middleware, please refer to doc
  app.post('/webhook', line.middleware(config), (req, res) => {
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
  });
  
  // simple reply function
	const replyText = (token, texts) => {
		texts = Array.isArray(texts) ? texts : [texts];
		return client.replyMessage(
			token,
			texts.map((text) => ({ type: 'text', text }))
	);
	};
	// Reply yg asli:
    // return client.replyMessage(event.replyToken, tutorVid);
    
    function startSoal(replyToken,nomor){
        const linkSatu = "https://1.bp.blogspot.com/-Qot9XEIeoxs/Xk69IfL1VnI/AAAAAAAAJBM/yGAskJGeey8farTlSwJoOvfaeL4GToDQgCLcBGAsYHQ/s1600/KQBot-1.jpg";
        const linkDua = "https://drive.google.com/uc?export=open&id=1wINkuGF2XdI2krfqQWvXjkcv0ipvNNTy";
        const linkTiga = "https://drive.google.com/uc?export=open&id=1oZgFnnuypyGnAPT3iEKfNKbaZn5tYy8x";
        const linkEmpat = "https://1.bp.blogspot.com/-qreeSzd8eD4/Xk7Gw1T8PTI/AAAAAAAAJBY/_PgDKZfQofwhWiw0SsJ7G7FD41Jpp5txwCLcBGAsYHQ/s1600/KQBot-4.jpg";
        const linkLima = "https://drive.google.com/uc?export=open&id=1r_IWV6xCVHGstlmTG9BYT-A3kP1scyH2";
        const linkEnam = "https://drive.google.com/uc?export=open&id=19RMDf7C56l5C37Pv9a41Evl-ReCTM6eH";
        const linkTujuh = "https://drive.google.com/uc?export=open&id=1lf2ziGDld2ukpR1FmNNnOp-pHobCv8ib";
        const linkDelapan = "https://1.bp.blogspot.com/-cbdST_XrVuQ/Xk7PI4LHucI/AAAAAAAAJBk/MfyOl8uYMPkZixeKQcmxuhFs5XwIspKCwCLcBGAsYHQ/s1600/KQBot-8.jpg";
        const linkSembilan = "https://1.bp.blogspot.com/-sriT9UhPLB8/Xk7RDcbA_WI/AAAAAAAAJBw/IyM3XQVJmRoPrcXYVow86gGOYiVwMN-LgCLcBGAsYHQ/s1600/KQBot-9.jpg";
        const linkSepuluh = "https://jkt48.com/profile/diani.jpg";
        const linkSebelas = "https://1.bp.blogspot.com/-Jze-qhnOav0/Xk7UC1ZvJLI/AAAAAAAAJB8/CZijUvQ-q8Mk-ozjVQh2hGsMwilxKfShwCLcBGAsYHQ/s1600/KQBot-11.jpg";

        switch(nomor){
            case 1:
                return client.replyMessage(replyToken, {
                    type: "image", originalContentUrl: linkSatu, previewImageUrl: linkSatu
                })
            case 2:
                return client.replyMessage(replyToken, {
                    "type": "audio",
                    "originalContentUrl": linkDua,
                    "duration": 60000
                })
            case 3:
                return client.replyMessage(replyToken, {
                    "type": "audio",
                    "originalContentUrl": linkTiga,
                    "duration": 60000
                })
            case 4:
                return client.replyMessage(replyToken, {
                    type: "image", originalContentUrl: linkEmpat, previewImageUrl: linkEmpat
                })
            case 5:
                return client.replyMessage(replyToken, {
                    "type": "audio",
                    "originalContentUrl": linkLima,
                    "duration": 60000
                })
            case 6:
                return client.replyMessage(replyToken, {
                    "type": "audio",
                    "originalContentUrl": linkEnam,
                    "duration": 60000
                })
            case 7:
                return client.replyMessage(replyToken, {
                    "type": "audio",
                    "originalContentUrl": linkTujuh,
                    "duration": 60000
                })
            case 8:
                return client.replyMessage(replyToken, {
                    type: "image", originalContentUrl: linkDelapan, previewImageUrl: linkDelapan
                })
            case 9:
                return client.replyMessage(replyToken, {
                    type: "image", originalContentUrl: linkSembilan, previewImageUrl: linkSembilan
                })
            case 10:
                return client.replyMessage(replyToken, {
                    type: "image", originalContentUrl: linkSepuluh, previewImageUrl: linkSepuluh
                })
            case 11:
                return client.replyMessage(replyToken, {
                    type: "image", originalContentUrl: linkSebelas, previewImageUrl: linkSebelas
                })
        }
    }

    function sendSoal(replyToken, nomor){
        const soalSatu      = "- SOAL 1 dari 10 -\n\nSelamat datang di soal pertama, setelah soal dimulai, silahkan menjawab dengan format:\n\n/ans1 (jawaban kamu)\n\nSiapakah anggota dari grup ini yang memiliki foto profil sebagai berikut...?\nNama harus lengkap, case-sensitive, dan bukan tag\n\nSIAP?";
        const soalDua       = "- SOAL 2 dari 10 -\n\nGimana soal pertama? gampang lah ya, wkwk... Lanjut nih soal kedua\nDi soal ini, kalian harus menjawab judul dan penyanyi lagu yang akan di nyanyikan\n\nFormat menjawab:\n/ans2 (penyanyi) - (judul)\nApabila dinyanyikan lebih dari satu penyanyi, sebutkan saja pemilik lagunya\n\nSIAP?";
        const soalTiga      = "- SOAL 3 dari 10 -\n\nAzeek, lanjut kuy\nSama seperti soal kedua, di soal ini, kalian harus menjawab judul dan penyanyi lagu yang akan diputar\n\nFormat menjawab:\n/ans3 (penyanyi) - (judul)\nApabila dinyanyikan lebih dari satu penyanyi, sebutkan saja pemilik lagunya\n\nSIAP?";
        const soalEmpat     = "- SOAL 4 dari 10 -\n\nMantap-mantap, break dulu lah ya, jangan dengerin lagu mulu, sekarang kita bahas soal yang lain\nSemua disini pernah olahraga kan ya? ya ga harus bisa, yg penting pernah aja.\nCoba deh jawab, gambar yang bakal aku tunjukin ini gerakan/posisi apa?\n\nFormat menjawab:\n/ans4 (jawaban kamu)\n\nSIAP?";
        const soalLima      = "- SOAL 5 dari 10 -\n\nOke bagus!! Yang bisa PAP kalian kayang sebelum soal ke 10 selesai dapet poin tambahan!! wkwk\nKalo ga ada yang mau juga gpp sih, cm buat asik-asikan aja\n\nOke lanjut nih, kita dengerin lagu lagi di malam minggu jomblo ini\n\nFormat menjawab: /ans5 (penyanyi) - (judul)\nApabila dinyanyikan lebih dari satu penyanyi, sebutkan saja pemilik lagunya\n\nSIAP?";
        const soalEnam      = "- SOAL 6 dari 10 -\n\nLOL! Ayo kayang! no pict hoax ya!! wkwk\nCanda gaes jangan ngambek :(\n\nHmm, ngapain ya kita...\nngemusik lagi aja lah ya? gaskeun\n\nFormat menjawab: /ans6 (penyanyi) - (judul)\nApabila dinyanyikan lebih dari satu penyanyi, sebutkan saja pemilik lagunya\n\nSIAP?";
        const soalTujuh     = "- SOAL 7 dari 10 -\n\nHayo ngaku, siapa yang dari tadi searching google? wkwakwka\nTadi lagu luar udah, jeketi-an juga udah.. satu lagu lagi lah ya..?\nOke jadi sekarang kita dangdutan aja gaes!!\n\nEitss... tapi ada yang beda nih di soal kali ini, yang kalian jawab bukan penyanyi dan judulnya, melainkan lanjutkan liriknya!\n\nFormat menjawab: /ans7 (7 kata lanjutan lagunya)\n\nSIAP?";
        const soalDelapan   = "- SOAL 8 dari 10 -\n\nPet Pals & Friends di goyaaanggg!!! Tarik mang!\nAzeek, tapi cukup dulu nih kita dangdutannya ya..\nSekarang kita pindah lagi, kita ngewibu dulu gaes\n\nSilahkan tebak, judul anime dari character yang bakal aku kirim!\n\nFormat menjawab: /ans8 (judul anime, dalam bahasa inggris)\nClue: Anime yang sedang tayang, berkisah tentang urban legend yang ada di jepang\n\nSIAP?";
        const soalSembilan  = "- SOAL 9 dari 10 -\n\nWow! Subhanallah, teman-teman aku pinter-pinter semua ternyata\nMusik udah, ngewibu udah, kayanya masih ada yang kurang nih ya\n\nSekarang, tugas kalian adalah menebak judul album yang bakal aku kirim cover artnya\n\nFormat menjawab: /ans9 (jawaban kamu)\n\nSIAP?";
        const soalSepuluh   = "- SOAL 10 dari 10 -\nTerakhir!\n\nAsik dah! lengkap udah paket komplit gue kan\nTapi masih ada yang ngeganjel... Waduh susah ni...\n\nCoba deh, kalian jawab... Siapakah orang yang ada di profile picture akun bot ini?\n\nFormat menjawab: /ans10 (nama lengkap orang tersebut)\n\nSIAP?";
        const soalSebelas   = "- SOAL BONUS! -\n\nWah gila! Saking pinternya temen-temenku, sampe aku harus ngluarin soal bonus!!\nMantep memang kalian yah\n\nKalo gitu, sekarang aku kasi pertanyaan, coba tebak karakter dan dari game mana dia?\n\nFormat menjawab: /ans11 (nama character) - (nama game)\n\nSIAP?";

        switch(nomor){
            case 1:
                return replyText(replyToken,soalSatu);
            case 2:
                return replyText(replyToken,soalDua);
            case 3:
                return replyText(replyToken,soalTiga);
            case 4:
                return replyText(replyToken,soalEmpat);
            case 5:
                return replyText(replyToken,soalLima);
            case 6:
                return replyText(replyToken,soalEnam);
            case 7:
                return replyText(replyToken,soalTujuh);
            case 8:
                return replyText(replyToken,soalDelapan);
            case 9:
                return replyText(replyToken,soalSembilan);
            case 10:
                return replyText(replyToken,soalSepuluh);
            case 11:
                return replyText(replyToken,soalSebelas);
        }
    }

  // event handler
  function handleEvent(event) {
     
     //  Chats
    const Nyolot 		= "Hayo! Ngapain kamu?";
    const rules         = "- RULES -\n\n1. Selalu menjawab dengan format. Jawaban tanpa format tidak dianggap.\n2. Jawablah pertanyaan sesuai dengan apa yang ditanyakan.\n3. Dilarang menjawab pertanyaan selain yang sedang ditanyakan.\n4. Perhitungan poin akan dilakukan manual.\n5. Pemenang dengan poin terbanyak dapat memilih 1 hadiah yang disediakan.\n6. Pemenang dengan poin terbanyak kedua dan ketiga mendapat swan random.\n7. Gausah nyolot.\n9. Jangan emosi, gw bot, lu mo adu argumen sama gw jg ga bakal gw tanggepin.";
    const NyolotBalik   = "anjing lu, ";
    const introKuis     = "HEY YO WHAT'S UP GUYS!\nKenalin gw KQ:Bot, Kopeyy Quiz Bot!\nDi quiz ini, gw yang bakal ngasi pertanyaan-pertanyaan ke kalian!\n\nINGAT! Gw itu bot, kalo lu jawba ga sesuai format, ya gw ga bakal gubris\nDi setiap pertanyaan, format menjawabnya bakal berbeda. Jadi tolong di baca baik-baik\n\nSIAP-SIAP YA!";
    


	if (event.type === 'follow'){
		return replyText(event.replyToken, Nyolot);
    } else if (event.type === 'join') {
        return replyText(event.replyToken, introKuis);
    } else if (event.type !== 'message' || event.message.type !== 'text') {
      // ignore non-text-message event
        return Promise.resolve(null);
    } else {
        const receivedMessage = event.message.text;
        if (event.source.userId === "U9f741c3b49c25d3f698fa228a5fb3380") {
            // Admin only chat function
            if (receivedMessage.split(" ").length === 2){
                const splitText = receivedMessage.split(" ");
                const command = splitText[0];
                switch (command){
                    case '/nyolot':
                        return replyText(event.replyToken, NyolotBalik + splitText[1]);
                    case '/soal':
                        var soalNo = parseInt(splitText[1]);
                        return sendSoal(event.replyToken, soalNo);
                    case '/start':
                        var soalNo = parseInt(splitText[1]);
                        return startSoal(event.replyToken, soalNo);
                }
            } else {
                switch (receivedMessage) {
                    case '/rules':
                        return replyText(event.replyToken, rules);
                }
            }
        } else {
            if(receivedMessage.includes(" ")){
            var index = receivedMessage.indexOf(' ');
            var [first, second] = [receivedMessage.slice(0, index), receivedMessage.slice(index + 1)];
            switch (first){
                case '/ans1':
                    switch(second) {
                        case "Fannisa":
                        return client.getProfile(event.source.userId)
                        .then((profile) => replyText(
                            event.replyToken,
                            [ `Soal 1: ${profile.displayName} benar!`]
                        ));
                    }
                case '/ans2':
                    switch(second.toLowerCase) {
                        case "jkt48 - rapsodi":
                        return client.getProfile(event.source.userId)
                        .then((profile) => replyText(
                            event.replyToken,
                            [ `Soal 2: ${profile.displayName} benar!`]
                        ));
                    }
                case '/ans3':
                    switch(second.toLowerCase) {
                        case "lost sky - where we started":
                        return client.getProfile(event.source.userId)
                        .then((profile) => replyText(
                            event.replyToken,
                            [ `Soal 3: ${profile.displayName} benar!`]
                        ));
                    }
                case '/ans4':
                    switch(second.toLowerCase) {
                        case "kayang":
                        return client.getProfile(event.source.userId)
                        .then((profile) => replyText(
                            event.replyToken,
                            [ `Soal 4: ${profile.displayName} benar!`]
                        ));
                    }
                case '/ans5':
                    switch(second.toLowerCase){
                    case "ariana grande - god is a woman":
                        return client.getProfile(event.source.userId)
                        .then((profile) => replyText(
                            event.replyToken,
                            [ `Soal 5: ${profile.displayName} benar!`]
                        ));
                    }
                case '/ans6':
                    switch(second.toLowerCase){
                    case "daniel kawadatha - black lies":
                        return client.getProfile(event.source.userId)
                        .then((profile) => replyText(
                            event.replyToken,
                            [ `Soal 6: ${profile.displayName} benar!`]
                        ));
                    }
                case '/ans7':
                    switch(second.toLowerCase){
                        case 'sak tenane ra ngapusi isih tresno sliramu':
                            return client.getProfile(event.source.userId)
                            .then((profile) => replyText(
                                event.replyToken,
                                [ `Soal 7: ${profile.displayName} benar!`]
                            ));
                        case 'sak tenane rak ngapusi isih tresno sliramu':
                            return client.getProfile(event.source.userId)
                            .then((profile) => replyText(
                                event.replyToken,
                                [ `Soal 7: ${profile.displayName} benar!`]
                            ));
                    }
                case '/ans8':
                    switch(second.toLowerCase){
                        case 'toilet bound hanako kun':
                            return client.getProfile(event.source.userId)
                            .then((profile) => replyText(
                                event.replyToken,
                                [ `Soal 8: ${profile.displayName} benar!`]
                            ));
                        case 'toilet bound hanako-kun':
                            return client.getProfile(event.source.userId)
                            .then((profile) => replyText(
                                event.replyToken,
                                [ `Soal 8: ${profile.displayName} benar!`]
                            ));
                    }
                case '/ans9':
                    switch(second.toLowerCase){
                        case 'bloomiz':
                            return client.getProfile(event.source.userId)
                            .then((profile) => replyText(
                                event.replyToken,
                                [ `Soal 9: ${profile.displayName} benar!`]
                            ));
                        case 'bloom*iz':
                            return client.getProfile(event.source.userId)
                            .then((profile) => replyText(
                                event.replyToken,
                                [ `Soal 9: ${profile.displayName} benar!`]
                            ));
                        case 'bloom iz':
                            return client.getProfile(event.source.userId)
                            .then((profile) => replyText(
                                event.replyToken,
                                [ `Soal 9: ${profile.displayName} benar!`]
                            ));
                        }
                case '/ans10':
                    switch(second.toLowerCase){
                        case "diani amalia ramadhani":
                        return client.getProfile(event.source.userId)
                        .then((profile) => replyText(
                            event.replyToken,
                            [ `Soal 10: ${profile.displayName} benar!`]
                        ));
                    }
                case '/ans11':
                    switch(second.toLowerCase){
                        case 'lapu-lapu - mobile legends':
                            return client.getProfile(event.source.userId)
                            .then((profile) => replyText(
                                event.replyToken,
                                [ `Soal BONUS: ${profile.displayName} benar!`]
                            ));
                        case 'lapu lapu - mobile legends':
                            return client.getProfile(event.source.userId)
                            .then((profile) => replyText(
                                event.replyToken,
                                [ `Soal BONUS: ${profile.displayName} benar!`]
                            ));
                        case 'lapulapu - mobile legends':
                            return client.getProfile(event.source.userId)
                            .then((profile) => replyText(
                                event.replyToken,
                                [ `Soal BONUS: ${profile.displayName} benar!`]
                            ));            
                    }
            }
        } else {
            switch(receivedMessage){
                case '/user':
                    return replyText(event.replyToken, event.source.userId);
            }
        }
    }
  }
  }  
  // listen on port
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
