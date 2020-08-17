# Project Overview

## Project Name

PokeDex

## Project Description

Will allow user to type in a pokemon name from a input field and display a sprites along with basic information about that pokemon.
Will do this by taking the name and fetching information by talking to a third party API.
When user types in a new pokemon it will remove the previous and display the new one.

## API and Data Samplehttps://github.com/mattmcknight13/PokeDex.git

PokeAPI: https://pokeapi.co/docs/v2

Sample JSON:
```json
{
    "abilities": [
        {
            "ability": {
                "name": "torrent",
                "url": "https://pokeapi.co/api/v2/ability/67/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "rain-dish",
                "url": "https://pokeapi.co/api/v2/ability/44/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 63,
    "forms": [
        {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon-form/7/"
        }
```


## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

Desktop:

![wireframe](https://imgur.com/xA8JDh3.png)


Mobile:

![wireframe](https://imgur.com/xz0FJYn.png)


Header: will display name of Project, and my name (should we acknoledge the api we use here?)
ex. PokeDex by Matthew McKnight with help of PokeAPI.

Page:
Big box will be background of app styled to look like a pokedex
input field will be where user types in name of a pokemon
Image will display clearly
and information below it in a oraginzied setting.

#### MVP 


- Allow user to select a pokemon 
- Reach external Api to reach information

- add selected pokemon and properties to the DOM to be displayed
- removed from Dom when a new pokemon is selected


#### PostMVP 
- Allow user to select from a list of pokemon instead of a text input in the desktop version
- Additional css styling in both mobile and larger screens
- added decoration css styling (buttons, lights)
- add type attribute as a background change based on pokemon
- animation for sprite to move between back facing view to front facing view when first appears/ or show both sprites at once.
-Add a timer to remove the displayed pokemon after set interval.


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|August 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 17| Project Approval | Incomplete
|August 18| Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 19| Initial Clickable Model  | Incomplete
|August 20| MVP | Incomplete
|August 21| Presentations | Incomplete

## Priority Matrix

![priority Matrix](https://imgur.com/nyzgGNe.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| core HTML | M| 3hrs| hrs | hrs |
| core CSS | M| 3hrs| hrs | hrs |
| core JS | M| 3hrs| hrs | hrs |
| Input functionality | H | 5hrs | hrs | hrs |
| Remove Functionality | H | 4hrs | hrs | hrs|
| Working with API | H | 4hrs| hrs | hrs |
| CSS Styling | H | 15hrs | hrs | hrs |

 | Total | H | 37hrs| hrs | hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
	// here is the code to reverse a string of text
}
Change Log
Use this section to document what changes were made and the reasoning behind those changes.
