## Steps for creating a blank Shopify theme

1. In the local system, Need created one folder, and in that, Need added the same folder that is required to make a Shopify theme. Below, all the folder names are available.
- layout
- templates
- sections
- snippets
- assets
- config 
- locals 

## Added default files that we need to create for the new theme
- In the layout folder, add two blank files called theme.liquid and password.liquid.
- You can make the blank password.liquid file and add below code in theme.liquid file 
```
<html>
  <head>
    ...
    {{ content_for_header }}
    ...
  </head>
  <body>
    ...
    {{ content_for_layout }}
    ...
  </body>
</html>

```
- In the template folder, you need to add two default files: [gift_card.liquid](https://github.com/Devnag-rock/Test/blob/main/templates/gift_card.liquid). and in index.json you have to add JSON code for one section like:
```
{
"name": "",
"sections": {},
"order": []
}
```
- I created one custom section file called demo.liquid. This is just to enable the home page and remove a 404 error. in this section file you can add static HTML code as well 
- We need to call this section file into the index.json file like:
```
{
  "sections": {
    "demo": {
      "type": "demo",
      "settings": {}
    }
  },
  "order": [
    "demo"
  ]
}
```
- You need to create two files in the configuration folder called settings_data.json and settings_schema.json.
- For settings_data.json file you can put as a blank file.
- In the settings_schema.json file you have to add theme infomation like: 
```
[
  {
    "name": "theme_info",
    "theme_name": "Theme Name",
    "theme_version": "Theme Version",
    "theme_author": "Theme Author Name",
    "theme_documentation_url": "Theme Documentation URL",
    "theme_support_url": "Theme Support URL"
  }
]

```

## Upload the theme first time in Development store
- For that we can make the zip file of main folder and then upload into development store

![image](https://github.com/Devnag-rock/Test/assets/133001575/fed5ac41-124c-407c-8602-5a82527daeb0)

## Install ThemeKit in your local system.
- For installation you need to refere Shopify [ThemeKit](https://shopify.dev/docs/themes/tools/theme-kit/getting-started). Documentation.
- Also you can find theme pull and push commands as well. 
