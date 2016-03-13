function bai_formatText() {
    var contents = $("#bai_fileContents").val();
    var isFileHeader = $("#bai_fileHeader").hasClass("active");
    var isFileTrailer = $("#bai_fileTrailer").hasClass("active");
    var isGroupHeader = $("#bai_groupHeader").hasClass("active");
    var isGroupTrailer = $("#bai_groupTrailer").hasClass("active");
    var isAccountHeader = $("#bai_accountHeader").hasClass("active");
    var isAccountTrailer = $("#bai_accountTrailer").hasClass("active");
    var isTransactionDetail = $("#bai_transactionDetail").hasClass("active");
    var isAccountNumber = $("#bai_accountNumber").hasClass("active");
    var isAccountBalance = $("#bai_accountBalance").hasClass("active");
    var isBankSettlementDay = $("#bai_bankSettlementDay").hasClass("active");
    var isBankRefNum = $("#bai_bankRefNum").hasClass("active");
    var isAmount = $("#bai_amount").hasClass("active");
    var isTypeCode = $("#bai_typeCode").hasClass("active");
    var isDetailRecord = $("#bai_detailRecord").hasClass("active");
    var lines = contents.split("\n");
    var accountHeaderCode = "03";
    var groupHeaderCode = "02";
    var fileHeaderCode = "01";
    var accountTrailerCode = "49";
    var groupTrailerCode = "98";
    var fileTrailerCode = "99";
    var transactionDetailCode = "16";
    var formattedContent = "";
    for (var index in lines) {
        var line = lines[index];
        var recordLine = "";
        var record = line.substring(0, 2);
        if (record == accountHeaderCode) {
            var parts = line.split(",");
            recordLine += parts[0] + ",";
            if (isAccountNumber) {
                recordLine += "<span class='label label-default'>" + parts[1]+ "</span>" + ",";
            } else {
                recordLine += parts[1] + ",";
            }
            recordLine = recordLine + parts[2] + "," + parts[3] + ",";
            if (isAccountBalance) {
                recordLine += "<span class='label label-primary'>" + parts[4] + "</span>" + ",";
            } else {
                recordLine += parts[4] + ",";
            }
            var index;
            for	(index = 5; index < parts.length; index++) {
                recordLine += parts[index] + ",";
            }
            if (isAccountHeader) {
                recordLine = "<span class='bg-success'>" + recordLine + "</span>";
            }
            formattedContent += recordLine + "<br />";
        } else if (record == groupHeaderCode) {
            if (isBankSettlementDay) {
                var parts = line.split(",");
                recordLine += parts[0] + ","+ parts[1] + ","+ parts[2] + ","+ parts[3] + ",";
                recordLine += "<span class='label label-default'>" + parts[4] + "</span>" + ",";
                var index;
                for	(index = 5; index < parts.length; index++) {
                    recordLine += parts[index] + ",";
                }
            } else {
                recordLine += line;
            }
            if (isGroupHeader) {
                recordLine = "<span class='bg-danger'>" + recordLine + "</span>";
            }
            formattedContent += recordLine + "<br />";
        } else if (record == fileHeaderCode) {
            recordLine = line;
            if (isFileHeader) {
                recordLine = "<span class='bg-info'>" + recordLine + "</span>";
            }
            formattedContent += recordLine + "<br />";
        } else if (record == accountTrailerCode) {
            recordLine = line;
            if (isAccountTrailer) {
                recordLine = "<span class='bg-warning'>" + recordLine + "</span>";
            }
            formattedContent += recordLine + "<br />";
        } else if (record == groupTrailerCode) {
           recordLine = line;
           if (isGroupTrailer) {
               recordLine = "<span class='bg-warning'>" + recordLine + "</span>";
           }
           formattedContent += recordLine + "<br />";
        } else if (record == fileTrailerCode) {
            recordLine = line;
           if (isFileTrailer) {
               recordLine = "<span class='bg-warning'>" + recordLine + "</span>";
           }
           formattedContent += recordLine + "<br />";
        } else if (record == transactionDetailCode) {
          var parts = line.split(",");
          recordLine = recordLine + parts[0] + ",";
          if (isTypeCode) {
              recordLine += "<span class='label label-default'>" + parts[1] + "</span>" + ",";
          } else {
              recordLine += parts[1] + ",";;
          }
          if (isAmount) {
              recordLine += "<span class='label label-default'>" + parts[2] + "</span>" + ",";
          } else {
              recordLine += parts[2] + ",";;
          }
          recordLine += parts[3] + ",";
          if (isBankRefNum) {
              recordLine += "<span class='label label-default'>" + parts[4] + "</span>" + ",";
          } else {
              recordLine += parts[4] + ",";;
          }
          var index;
          for	(index = 5; index < parts.length; index++) {
              recordLine += parts[index] + ",";
          }
          if (isFileTrailer) {
              recordLine = "<span class='bg-danger'>" + recordLine + "</span>";
          }
          formattedContent += recordLine + "<br />";
        } else {
            formattedContent += line + "<br />";
        }
    }
    $("#bai_formattedContents").html(formattedContent);
};
