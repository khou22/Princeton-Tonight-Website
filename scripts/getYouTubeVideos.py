# November 30, 2016
# Kevin Hou
# Description: Script to web scrape the latest YouTube video data from Princeton Tonight's YouTube Channel

from bs4 import BeautifulSoup # Module to sort through the html
import lxml # Module to parse through the html for BeautifulSoup
import urllib2 # Gets html
import webbrowser # This module can control the browser
import time # Getting current time (float type)
import datetime # Formatting current time into a string
import sys # More control over printing

# Princeton Tonight YouTube Channel
channelURL = "https://www.youtube.com/channel/UCRVIKq9pzYzEE8arEE4H1LQ/videos"

# JS data file name
fileName = "videoData.js"

# Data to collect
videoNames = [] # Names
videoImages = [] # Image
videoLinks = [] # Links

try: # Make sure link exists
    urllib2.urlopen(channelURL)
except urllib2.HTTPError, e:
    print(e.code) # Return any errors
except urllib2.URLError, e:
    print(e.args)

response = urllib2.urlopen(channelURL) # Get markdown
html = response.read() # Markdown
soup = BeautifulSoup(html, "lxml") # Using lxml parser

# Get the div that holds all the recent YouTube videos
videoContainer = soup.findAll("ul", { "class" : "channels-browse-content-grid branded-page-gutter-padding grid-lockups-container" })

# Get each video block from channel
videoBlocks = videoContainer[0].findAll("li", { "class" : "channels-content-item yt-shelf-grid-item" })

for index in range(0, len(videoBlocks)):
    # Video name
    nameTag = videoBlocks[index].findAll('a')[1] # Get tag with video name
    title = nameTag['title'].encode("utf-8").replace("\"", "'") # Video title
    videoNames.append(title) # Push to array
    # print(title) # Print

    # Video image
    imgTag = videoBlocks[index].findAll('img')[0] # Get the img tag within div
    videoImages.append(imgTag.get('src')) # Get url of the image
    # print(imgTag.get('src')) # Print

    # Video link
    videoLinks.append("https://www.youtube.com" + nameTag.get('href')) # Get video url

    # print ""


######   Export to JS Data   ######
# Get current time stamp
ts = time.time() # Get current time
timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S') # Format current time
timestamp = str(timestamp)
# print timestamp # Feedback

# Create JS file
def createJavascriptVar(varName, value, varType): # Function for creating JS variable declaration
    # Allows Javascript to access values as variable
    # print "Creating variable: %s" % varName # Feedback
    output = "var " + varName + " = " # Add variable name and equals sign
    if varType is 'string': # If a string type
        # print "Type: String"
        output += "'" + value + "';\n"
    elif varType is 'int': # If a number and not a string
        # print "Type: Int"
        output += str(value) + ";\n" # Semicolon and new line
    # print output # Feedback
    return output # Return as a value

def createConsoleLog(message): # Function for creating JS console.log
    # Good for debugging/user feedback in JS file
    output = "console.log('" + message + "');\n" # Concatenate strings
    # print output # Feedback
    return output

# '\n' signifies a line break
outputFile = open(fileName, 'w') # 'w' for writing, will overwrite existing

# Code to write more code
outputFile.write(createConsoleLog("Loaded YouTube Videos")) # Write debugger code
outputFile.write(createConsoleLog("Last updated: " + timestamp)) # Add time stamp from current time
outputFile.write(createJavascriptVar('timestamp', timestamp, 'string')) # Create JS variable for timestamp
outputFile.write(createJavascriptVar('videoCount', 0, 'int')) # Create JS variable for video count

indentStr = "  " # Indent placeholder
outputFile.write("var videoData = [\n") # Open array
for index in range(0, len(videoNames)):
    outputFile.write(indentStr + "{\n")
    outputFile.write(indentStr + indentStr + "\"title\": \"" + videoNames[index] + "\",\n")
    outputFile.write(indentStr + indentStr + "\"imgURL\": \"" + videoImages[index] + "\",\n")
    outputFile.write(indentStr + indentStr + "\"url\": \"" + videoLinks[index] + "\",\n")
    outputFile.write(indentStr + "},\n")
outputFile.write("]\n") # Close JSON

print "" # Line break
print "****** Retrieved %d Latest YouTube Videos ******" % len(videoNames)
