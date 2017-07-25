import glob # For finding files with jpg extension
from PIL import Image
import progressbar

targetWidth = 1000.0

bar = progressbar.ProgressBar()
images = glob.glob("*.jpg")

counter = 0
for image in bar(images):
    currentImage = Image.open(image)
    width, height = currentImage.size # Get current width and height

    scale = float(targetWidth)/width # Calculate the scale
    targetHeight = int(scale * height)

    newSize = int(round(targetWidth)), int(round(targetHeight))

    resized = currentImage.resize(newSize, Image.ANTIALIAS)
    resized.save(image, 'JPEG') # Overwrite image
    counter += 1 # Increment

######   Export to JS Data   ######
import time # Getting current time (float type)
import datetime # Formatting current time into a string
import sys # More control over printing

# Get current time stamp
ts = time.time() # Get current time
timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S') # Format current time
timestamp = str(timestamp)

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
outputFile = open('galleryImages.js', 'w') # 'w' for writing, will overwrite existing

# Code to write more code
outputFile.write(createConsoleLog("Loaded gallery images")) # Write debugger code
outputFile.write(createConsoleLog("Last updated: " + timestamp)) # Add time stamp from current time
outputFile.write(createJavascriptVar('timestamp', timestamp, 'string')) # Create JS variable for timestamp
outputFile.write(createJavascriptVar('imageCount', counter + 1, 'int')) # Create JS variable for video count

indentStr = "  " # Indent placeholder
outputFile.write("var imageData = [\n") # Open array
for index in range(0, len(images)):
    outputFile.write(indentStr + "\"" + images[index] + "\",\n");
outputFile.write("];\n") # Close JSON
