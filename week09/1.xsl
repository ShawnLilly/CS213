<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="xml" indent="yes" />
<xsl:template match="classes">
<html>
<head>
<title>Teach 09 : Problem 1 </title>
</head>
<body>
<xsl:for-each select="class">
<p><xsl:value-of select="."/></p>
</xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>