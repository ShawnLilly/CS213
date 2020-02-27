<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
    <link rel="stylesheet" type="text/css" href="BSA.css"></link> 
    <title>B.S.A.</title>
  </head>
  
<body>
  
  <table style="width:99%">
    <tr bgcolor="#b30000">
      <th style="text-align:center" width="14%">COUNCIL</th>
      <th style="text-align:center" width="9%">NAME AND TROOP</th>
      <th style="text-align:center" width="24%">RANK AND DATE EARNED</th>
      <th style="text-align:center" width="28%">MERITBADGE AND DATE EARNED</th>
      <th style="text-align:center" width="17%">ADDRESS</th>
      <th style="text-align:center" >Phone</th>
    </tr>
  </table>
  
  
  <table >
    <tr></tr>
      <xsl:for-each select="bsa/council">
        <th style="text-align:left" ><h3><xsl:value-of select="@name" /></h3></th>
      <xsl:for-each select="troop">
    <tr></tr>
        <th></th>
        <th style="text-align:left">
            <xsl:value-of select="@troopNumber" />
            <xsl:value-of select="concat(' ',@unitName)" /></th>
        <xsl:for-each select="scout">
        <tr>
        <td></td>
      <td><xsl:value-of select="firstName" />
            <xsl:value-of select="concat(' ',lastName)" /></td>
            <xsl:for-each select="rank">
        <td style="text-align:right"><xsl:value-of select="concat(' ',@name)" /></td>     
        <th style="text-align:left"><xsl:value-of select="concat(' ',@dateEarned)" /></th>
            </xsl:for-each> <!--rank -->
            <xsl:for-each select="meritbadge">
        <td style="text-align:right"><xsl:value-of select="concat(' ',@name)" /></td>     
        <th style="text-align:left"><xsl:value-of select="concat(' ',@dateEarned)" /></th> 
            </xsl:for-each> <!--meritbadge -->
        <td><i><xsl:value-of select="address" /></i></td>
        <td><xsl:value-of select="phone" /></td>
      </tr>
            </xsl:for-each> <!--scout -->
      </xsl:for-each> <!--troop -->
  </xsl:for-each> <!--bsa/council -->     
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>