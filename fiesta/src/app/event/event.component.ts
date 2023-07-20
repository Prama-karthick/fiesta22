import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbUtilityService } from '../db-utility.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  name="";
  rules="";
  eventDetails={
    "eventsList": [{
      id: "0",
      name: "As You Like It",
      rules: [
        "Time Duration: 3 mins; Venue : Mech Seminar Hall",
        "Reporting Time : 1.15 PM",
        "Students can exhibit any talents like Juggling, Martial Art, Beat Box, Silambam, Hulahoops, Mimicry, Mono-act etc.,",
        "Singing, Dancing, Instrumentals are NOT ALLOWED.",
        "Participants should bring the necessary items",
        "The audio track can be played in the background. If so, audio track submission on or before 17.04.2023 by 5 pm in mp3 format (Normalized)",
        "Vulgarity in any form is strictly prohibited.",
        "The Jury’s decision is final. If necessary, prelims will be conducted.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Dr. Ezhil Maran/Mech & Mr.Viswalingam/English",
      ]
    },{
      id: "1",
      name: "Best Manager",
      rules: [
        "No restriction in number of participants.",
        "Usage of proper words during the event should be strictly followed.",
        "The Jury’s decision is final. ",
        "ROUND 1- Prelims 3 rounds (Aptitude Questions, Individual task and multitasking).",
        "---Venue : Civil Seminar Hall",
        "---Time: 09.30 AM",
        "---Language for communication is strictly English.  ",
        "---Selected paticipants will get to next round",
        "Final Round",
        "---Venue : MCC",
        "---Time: 01.15 PM",
        "---Totally single Round: ( Situation handling)",
        "---Language for communication is strictly English.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Dr.A.Sakthivel/CHEM",

      ]
    },{
      id: "2",
      name: "Solo Dance",
      rules: [
        "Audio track must be in mp3 format.",
        "Venue: MCC; Time Duration: 3 mins.",
        "Whistle, Vulgarity in songs, Moves, Costumes or any sorts will lead to disqualification.",
        "Dangerous properties should not be used.",
        "Songs must not be highly peppy (Strictly Avoid kuthu songs).",
        "Innovation and creativity in dance will be given additional credits.",
        "The dress code must be proper and get approval from the concerned staff.",
        "Reporting time 9:00 AM",
        "Any kind of dance may be performed like classical, free style or Folk etc.,",
        "Maximum of 20 participants who complete registration, corrected audio track submission on or before 17.04.2023 by 5 pm in mp3 format (Normalized) on first come first basis to the concerned staff.",
        "Jury's decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Dr.T.Prabaharan/Mech& Dr.C.Gangalakshmi/English.",

      ]
    },{
      id: "3",
      name: "Solo Singing",
      rules: [
        "Reporting time: 09.00 AM; Students should be in formal wear.",
        "Time Duration : 3 mins; Venue : Mech Seminar Hall",
        "No pre-recordings should be played.",
        "Only Karaoke is allowed. No other background voices",
        "Any style of music can be performed (Folk, Jazz, Melody, Pop, Metal etc.).",
        "Only Tamil songs are allowed.",
        "Vulgarity in song selection, lyrics or any sorts will lead to disqualification.",
        "Judging criteria will be : Shruthi, Voice Clarity, Song difficulty, Tempo and Improvisations.",
        "Jury decision is final. Prelims will be conducted.",

        "Submit your karaoke to the concerned staff on or before 17.04.2023 by 5 pm in mp3 format (Normalized).",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Mr.Haamidh/Civil & Dr.Winfred Shashikanth.",

      ]
    },{
      id: "4",
      name: "Solo Instrumental",
      rules: [
        "Students should be in formal wear.",
        "Venue : Mech Seminar Hall;Time Duration : 3 mins.",
        "Reporting Time : 11.00 AM",
        "Any kind of instruments can be played. ( Percussions, Non-Percussions, Keys, Strings, Wind Instruments) or Multiple instruments can played to make your performance attractive. ( Eg. keyboard + guitar )",
        "Mild Karoke/ Mild Voiceovers can be used (if needed) upon which the instrument can be played.",
        "Judging criteria :  Song difficulty, Tempo, Rhythm, No. Of flaws, Improvisations",
        "Submit your audio to the concerned staff on or before 29.08.2022 by 5 pm in mp3 format (Normalized).",
        "Jury's decision is final",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Mr.Haamidh/Civil & Dr.Winfred Shashikanth.",

      ]
    },{
      id: "5",
      name: "Pixie",
      rules: [
        "THEME: HOMETOWN PRIDE; Stick to the theme",
        "Venue : In front of MCC; Voting starts @09.30 AM",
        "Internet images will be disqualified",
        "Colour correction is allowed but avoid surrealism",
        "Best Photos will be short-listed from the entries and will be displayed on the pixie board.",
        "Voting will be undertaken.",
        "Soft copies of the photograph are only considered.",
        "Submit your photos through mail to photoclubforu@gmail.com (In subject, mention entry for pixie. Mention your name, year, dept, sec, roll no in the body of the email) on or before 17.04.2023",
        "Jury decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Mr.M.Suresh Kumar/PHY.",

      ]
    },{
      id: "6",
      name: "Drawing (Pencil Sketching) Solo Event",
      rules: [
        "Time Duration: 1 hour; Reporting Time : 01.30 PM",
        "Venue : Drawing Hall & SHF16, S&H Block (First floor)",
        "Drawings should be drawn in an A4 sheet.",
        "Participants should use only pencil for sketching.",
        "Participants should bring their own drawing paraphernalia(including A4 sheet).",
        "Topic will be given on the spot",
        "Jury decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Mr.C.Utharanarayanan/MECH.",

      ]
    },{
      id: "7",
      name: "Yoga",
      rules: [
        "Venue : CSE Seminar Hall",
        "Time : 09.00 AM",
        "Each candidate is to perform one Bending,one Stretching,one Twisting and extra two Asana of their own.",
        "Track suits & Closed T-shirts must be worn during the competition.",
        "Shorts &amp; Sleeveless strictly not allowed. Musical Yoga Allowed.",
        "Rhythm,Posture,Complication,Flexibility is taken under Consideration.",
        "Jury decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Mrs.AMK.Saliha Banu/PED.",

      ]
    },{
      id: "8",
      name: "Ezhuthaani",
      rules: [
        "Theme/Topic : On the Spot",
        "Venue : SHG04, SHG05;Reporting Time : 9.00 AM",
        "Participants need to exhibit their Creative Writing skills (fiction or poetry) in Tamil or English.",
        "The duration of the event is 1 hour",
        "The maximum mark for the event is 50 with the following split-up.",
        "→ Content + flow - 15 marks",
        "→ Presentation - 5 marks",
        "→ Creativity + relevance to the title - 10 marks",
        "→ English / Tamil Punctuation  - 10",
        "→ Vocabulary style - 10",
        "All entries will be thoroughly validated.",
        "Jury's decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Mrs.J.Deepalakshmi/MATH.",

      ]
    },{
      id: "9",
      name: "Divide And Conquer",
      rules: [
				"Venue : CSE Seminar Hall; Reporting Time : 01.15 PM",
				"The team can consist of 5 members;Only 20 teams can register.",
				"Registration based on first come first serve basis.",
				"No change of Team members is permitted once the registration is closed.",
				"There are totally three rounds to finish the game i.e., Prelims, round 1 and the final round",
				"Prelims would be conducted on on the same day of the event.Maximum of 10 teams will be selected from prelims.",
				"Time Duration: 2 Hrs (20 min-Prelims, 45 min-Round 1,45 min-Final Round)",
				"Out of 20 teams, 10 Teams would be selected to Round 1 and 5 teams to the final round.",
				"Multiple tasks will be given for participants in each team separately in each level.",
				"Marks would be provided on the basis of time of completion of the tasks collectively",
				"Jury decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Mr.R.Sebastiyan/LIB.",

				]
    },{
      id: "10",
      name: "Treasure hunt",
      rules: [
				"The participating team must have exactly 5 members. There will be no changes in the participants list after initial submission",
				"Total 30 teams (15 Boys team and 15 Girls team) will be shortlisted for prelims round based on first come first serve",
				"Participants should assemble at the S&H Seminar Hall on or before 9.10am. Prelims round starts by 9.15am",
				"Elimination will be there based on your prelims score.",
				"15 teams will be shortlisted for the Item collection round.",
				"If you borrow any items within the campus from anybody you must be responsible for returning it.",
				"Interaction among other teams is strictly prohibited.",
				"For the Final round, 8 teams will be shortlisted",
				"The first team to finish the final level will be the winner of the event.",
				"Final score will be based on all previous levels.",
				"Be genuine and ethical to solve the clues at each level on your own. Googling the answers is strictly prohibited.",
				"Jury's decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Dr.J.Senthilkumar/ECE.",

				]
    },{
      id: "11",
      name: "Monsters’ Muss",
      rules: [
        "Venue : Civil Seminar Hall;Reporting Time : 01.30 PM",
        "Duration: 2 hours",
        "Each team should have two students.",
        "Prelims may be conducted if the number of teams exceeds FIFTEEN.",
        "Indiscipline in any form will lead to the disqualification of the team.",
        "Stationary items like pens, pencils etc have to be brought by the participants.",
        "Electrical/External sources should not be used during the event.",
        "Judging will also be based on fluency, creative thinking, multi-tasking, language skills.",
        "Jury’s decision is final.",

        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff incharge: Dr.B.Rathika (English department)."
      ]
    },{
      id: "12",
      name: "Radio Mirchi",
      rules: [
				"Venue : CSE Seminar Hall;Reporting Time : 09.30 AM",
				"A team can have a maximum of three members. Single member per team is acceptable.",
				"Recorded voices or any sound are not allowed.",
				"Voice and tone modulations of the participants will be considered.",
				"Participants should have their content relevant to their titles and may show their creative touch during the show.",
				"The event as a whole has two rounds.",
				"→ 1st round- participants can prepare their talk with their own topics.",
				"→ 2nd round- participants will be given a task to find the topic and are expected to talk on the topic.",
				"Vulgarity and provocative thoughts in the topic or talk will not be entertained and shall be subject to immediate disqualification from the event.",
				"Jury decision is final.",
				"JUDGMENT CRITERIA:",
				"	1. Clarity of voice",
				"	2. Fluency",
				"	3. Originality",
				"	4. Communication of the contest theme",
				"	5. Sense of humour and presentation",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Mrs.P.Palniladevi/ECE.",

				]
    },{
      id: "13",
      name: "English Potpourri",
      rules: [
				"Venue : AV Hall, S & H Block",
				"Time : 9.00 AM",
				"Each team should have 3 participants.",
				"The events include 2 rounds which have to be performed by the teams within 2 hour.",
				"Round 1 includes",
				"	1. Channel Surfing",
				"	2. Block and Tackle",
				"	3. Ad. on spot",
				"Round 2 includes",
				"	1. Rearrange the jumbled word (words from Dictionary)",
				"	2. Sudoku",
				"	3. Cross word",
				"	4. Minimalist posters of films",
				"	5. Find the words from the given suffix",
				"In this written task the best scores will be considered.",
				"Jury decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges:Mr.J.Anish Jafrin Thilak/MECH.",

				]
    },{
      id: "14",
      name: "Lyrical Hunt",
      rules: [
				"Venue : S&H Seminar Hall;Time : 01.30 PM",
        "Each team can have 3 members",
				"The Event comprises of 2 segments - Prelims followed by the Main Event.",
				"Prelims will be conducted prior to the main event and 8 teams will be selected for the main round .",
				"Prelims consists of 3 segments, Each segment will have 10 questions and each question will be awarded 1 point.",
				"Questions for prelims would be of the form Jumbled Lyric, Complete the lyric and Guess the song.",
				"Main round will consist of 5 to 6 segments like Karaoke, Connections, Rapid Fire, Reverse the song etc….",
				"Marks for each segment will be announced on the spot.",
				"Jury decision is final",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges: Mrs.S.Usha,/CIV.",

				]
    },{
      id: "15",
      name: "Tamil Potpourri",
      rules: [
				"Venue : ECE Seminar Hall;Time : 01.30 PM",
				"Each team should consist of 3 members.",
				"There may be prelims, and then 8 teams will make to the final.",
				"Prelims will consist of 3 segments, each segment will contain 5 questions(each 1 mark).",
				"Main event: Each team will be asked number of questions based on the rounds.",
				"The team with the correct answer will get a +5 mark.",
				"We will be having a Special question in a round where the team will get +10 marks.",
				"During the Special question if the answer is wrong the team will be awarded -2 marks.",
				"The team can pass on the questions where they will not lose any marks.",
				"The team which gets the pass question will get +2.5 for the correct answer and they will not get any negative marks if they haven't answered the question and passed.",
				"In case of tie the team will be asked 3 rapid fire questions and the team with more quick answers will be declared as the winner.",
				"Jury decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges: Mr.G.Manoj Kumar/MECH.",

				]
    },{
      id: "16",
      name: "Cinematrix (Short Flim)",
      rules: [
				"Venue : S&H Seminar Hall;Reporting Time : 11.00 AM",
				"Maximum of 8 members per team.",
				"THEME: No criteria in choosing theme.",
				"Duration: 15 min (including title and credits).",
				"The YouTube link must be sent or shared via Google Drive to photoclubforu@gmail.com on or before 17.04.2023",
				"Best films will be shortlisted and intimated before 18.04.23.",
				"Cinematography & editing will play as the major score points.",
				"Avoid help from professional artists.",
				"Jury decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges: Dr.Winfred Shashikanth/PHY.",

				]
    },{
      id: "17",
      name: "Quizzards of Oz",
      rules: [
				"Venue : ECE Seminar Hall;Reporting Time : 9.00 AM",
				"Each team should consist of two members.Prelims would be of a written format.",
				"Six teams would be selected from the prelims.",
				"Main Round:",
        "Topics include historical, scientific, sports, cinema, etc.",
				"Round -1",
				"	❖ Each team gets one question.",
				"	❖ Each question is a pass question.",
				"	❖ There is no negative marking.",
				"	❖ The correct answer for the direct question gets 10 marks.",
				"	❖ Correct answer for passed question gets 5 marks.",
				"Round – 2",
				"	❖ Each team gets one question.",
				"	❖ Each question is not a pass question.",
				"	❖ Wrong answer gets a negative marking of -5.",
				"	❖ Correct answer gets 10 marks.",
				"Round – 3",
				"	❖ Each team gets one question.",
				"	❖ No negative marking.",
				"	❖ Correct answer on first clue gets 20 marks.",
				"	❖ Correct answer on second clue gets 15 marks.",
				"	❖ Correct answer on third clue gets 10 marks.",
				"	❖ Correct answer on last clue gets 5 marks.",
				"Round – 4",
				"	❖ Each team gets one question.",
				"	❖ Only one person will answer the question.",
				"	❖ Should answer rapidly.",
				"	❖ No negative marking.",
				"	❖ Each question is not a pass question.",
				"	❖ The correct answer gets 5 marks.",
				"Round – 5",
				"	❖ Each team gets one question and genre based.",
				"	❖ No negative marking.",
				"	❖ Each question is not a pass question",
				"Jury decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges: Mrs.A.Annie Aglin/BT.",

			 ]
    },{
      id: "18",
      name: "Group Dance",
      rules:	[
				"No of members: Minimum 4 to Maximum 15",
				"Time Duration: 5 minutes.Venue: MCC",
        "Reporting time 10:15 AM",
				"Concepts or themes can be used without affecting the dance.",
				"Whistle, Vulgarity in Songs, Moves, Costumes or any sorts will lead to disqualification.",
				"Innovation and creativity in dance will be given additional credits.",
				"Proper approval for dress must be sought from the concerned faculty-in-charges earlier.",
				
        "Songs must not be highly peppy (Strictly Avoid kuthu songs)",
				"No participation of boys and girls together.",
        "Maximum no of teams – 12; corrected audio track submission on or before 17.04.2023 by 5 pm in mp3 format (Normalized) on first come first basis.",
				"Jury decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges: Dr.T.Prabaharan/Mech& Dr.C.Gangalakshmi/English.",

				]
    },{
      id: "19",
      name: "Poster Making",
      rules:	[
				"Venue : S&H Block Computer Lab - I (I Floor).Reporting Time : 1.30 PM",
				"Two members per team.ON SPOT TOPIC",
				"You will get 90 mins to work on your poster.",
				"Both paper based and digital graphics are allowed.",
				"Poster should be made in A3 size.",
				"For paper based participants should use A3 sheets and all other necessary items.",
				"For digital graphics participants must bring their laptops with necessary software installed.",
				"Jury decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges: Mr.M.Suresh Kumar/PHY.",

				]
    },{
      id: "20",
      name: "Rangoli",
      rules:	[
        "Maximum of 3 participants per team.",
				"Theme : WOMEN EMPOWERMENT",
				"Time Duration : 90 mins Reporting Time: 10.15 am",
				"Venue: S&H Block First Floor Veranda",
        "Can use rock salt, flowers, dhal etc. & should bring the necessary items",
        "Usage of templates are strictly prohibited.",
				"Judging criteria will be : symmetry, color combination, innovation, creativity and the neatness of the Rangoli.",
				"Jury's decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges: Mrs.BlessaBinolinPepsi/IT& Mrs.P.Madhumitha/English.",

				]
    },{
      id: "21",
      name: "Drama/Mime",
      rules:	[
        "Maximum of 10 members and minimum of 4 per team.",
        "Time Duration: 8 min.;Venue : MCC",
        "Reporting Time : 1.45 PM",
        "Participants can use either audio track in MP3 format or Oral delivery.",
        "Drama or mime could be performed.",
        "Language – Tamil & English.",
        "Whistling, Teasing, Vulgarity in Songs, Dialogues, Costumes or any sort will lead to disqualification.",
        "Judgement will be based on acting, concept, stage presence, audio, costume etc.,",
        "Participants must bring their own materials.",
        "First 15 teams who complete the registration with corrected audio track submission on or before 17.04.2023 by 5 pm in mp3 format (Normalized).",
        "The Jury’s decision is final.",
        "The Registeration Form for the event should be submitted to the concerned staff incharges",
        "Staff Incharges: Dr.T.Prabaharan/Mech &  Mr.M.Jawahar/EEE.",

      ]
    }
  ]
  };
  data: any;
  id: any;
  Elist: any;

  constructor(private route: ActivatedRoute, private router: Router,private mydb:DbUtilityService) {

  }
  public ievent = true;
  public gevent = false;
  public closedEvent = false;
  public closedEventInS = false;
  closedEventInSText: any;
  ngOnInit(): void {
    window.scroll(0,0);
    this.id= this.route.snapshot.params["id"];
    
    this.Elist=this.mydb.geteventslist;
    this.data= this.eventDetails.eventsList[this.id];

    this.name= this.data["name"];
    this.rules= this.data["rules"];
    
    if(this.id < 9){
    this.ievent=true;
      this.gevent=false;
    }
    else{
        this.ievent=false;
      this.gevent=true;
    }


    // if(this.id==10){
    //   this.closedEvent= true
    //   this.closedEventInS=true
    //   this.closedEventInSText="Event Closed!!! Participate in other events... ThankYou..."
    // }
  }

  participate(){
    if(this.id<9){
      const redirectUrl = '/participate/'+this.id;
      // Redirect the user
      this.router.navigate([redirectUrl]);
    }
    else{
      const redirectUrl = '/participates/'+this.id;
      // Redirect the user
      this.router.navigate([redirectUrl]);
    } 
  }
}
