<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<table border="1">
<tr bgcolor="#ffc0cb">
<th style="text-align:center">Name</th>
<th style="text-align:center">Size</th>
<th style="text-align:center">Type</th>
</tr>
<xsl:for-each select="directory/file">
<tr>
<td><xsl:value-of select="@name" /></td>
<td><xsl:value-of select="@size" /></td>
<td><xsl:value-of select="@type" /></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>