function emaf_formatText() {
    var contents = $("#emaf_fileContents").val();
    var isRecordCode = $("#emaf_recordCode").hasClass("active");
    var isFileHeader = $("#emaf_fileHeader").hasClass("active");
    var isFileTrailer = $("#emaf_fileTrailer").hasClass("active");
    var isCreditSummary = $("#emaf_creditSummary").hasClass("active");
    var isDebitSummary = $("#emaf_debitSummary").hasClass("active");
    var isProcessingDate = $("#emaf_processingDate").hasClass("active");
    var isChainCode = $("#emaf_chainCode").hasClass("active");
    var isAmount = $("#emaf_amount").hasClass("active");
    var isFundingSubmerchantId = $("#emaf_fundingSubmerhantId").hasClass("active");
    var isRecordLevel = $("#emaf_recordLevel").hasClass("active");
    var isMop = $("#emaf_mop").hasClass("active");
    var lines = contents.split("\n");
    var formattedContent = "";
    for (var index in lines) {
        var line = lines[index];
        var recordLine = "";
        var record = line.substring(9, 12);
        if (record == "010") {
            if (isRecordCode) {
                recordLine = recordLine	+ line.substring(0, 9)	+ "<span class='label label-default'>" + record+ "</span>"
                             + line.substring(12, 42);
            } else {
                recordLine = recordLine + line.substring(0,42);
            }
            if (isProcessingDate) {
                recordLine = recordLine + "<span class='label label-primary'>" + line.substring(42,50) + "</span>"
                             + line.substring(50,105);
            } else {
                recordLine = recordLine + line.substring(42,105);
            }
            if (isChainCode) {
                recordLine = recordLine + "<span class='label label-success'>" + line.substring(105,111) + "</span>"
                             + line.substring (111);
            } else {
                recordLine = recordLine + line.substring(105);
            }
            if (isFileHeader) {
                recordLine = "<span class='bg-success'>" + recordLine + "</span>";
            }
            formattedContent = formattedContent + recordLine + "<br />";
        } else if (record == "910") {
            if (isRecordCode) {
                recordLine = recordLine + line.substring(0, 9) + "<span class='label label-default'>" + record + "</span>"
                             + line.substring(12);
            } else {
                recordLine = line;
            }
            if (isFileTrailer) {
                recordLine = "<span class='bg-danger'>" + recordLine + "</span>";
            }
            formattedContent = formattedContent + recordLine + "<br />";
        } else if (record == "503") {
            if (isRecordCode) {
                recordLine = recordLine + line.substring(0, 9) + "<span class='label label-default'>" + record + "</span>"
                             + line.substring(12, 15);
            } else {
                recordLine = recordLine + line.substring(0,15);
            }
            if (isRecordLevel) {
                recordLine = recordLine + "<span class='label label-default'>" + line.substring(15,16) + "</span>"
                             + line.substring(16,28);
            } else {
                recordLine = recordLine + line.substring(15,28);
            }
            if (isFundingSubmerchantId) {
                recordLine = recordLine + "<span class='label label-info'>" + line.substring(28,44) + "</span>"
            } else {
                recordLine = recordLine + line.substring(28,44);
            }
            if (isMop) {
                recordLine = recordLine + "<span class='label label-warning'>" + line.substring(44,48) + "</span>"
            } else {
                recordLine = recordLine + line.substring(44,48);
            }
            if (isAmount) {
                recordLine = recordLine + "<span class='label label-danger'>" + line.substring(48,61) + "</span>"
                             + line.substring(61);
            } else {
                recordLine = recordLine + line.substring(48);
            }
            if (isCreditSummary) {
                recordLine = "<span class='bg-info'>" + recordLine + "</span>";
            }
            formattedContent = formattedContent + recordLine + "<br />";
        } else if (record == "522") {
            if (isRecordCode) {
                recordLine = recordLine + line.substring(0, 9) + "<span class='label label-default'>" + record + "</span>"
                             + line.substring(12, 15);
            } else {
                recordLine = recordLine + line.substring(0,15);
            }
            if (isRecordLevel) {
                recordLine = recordLine + "<span class='label label-default'>" + line.substring(15,16) + "</span>"
                             + line.substring(16,28);
            } else {
                recordLine = recordLine + line.substring(15,28);
            }
            if (isFundingSubmerchantId) {
                recordLine = recordLine + "<span class='label label-info'>" + line.substring(28,44) + "</span>"
            } else {
                recordLine = recordLine + line.substring(28,44);
            }
            if (isMop) {
                recordLine = recordLine + "<span class='label label-warning'>" + line.substring(44,48) + "</span>"
            } else {
                recordLine = recordLine + line.substring(44,48);
            }
            if (isAmount) {
                recordLine = recordLine + "<span class='label label-danger'>" + line.substring(97,110) + "</span>"
                             + line.substring(110);
            } else {
                recordLine = recordLine + line.substring(48);
            }
            if (isDebitSummary) {
                recordLine = "<span class='bg-warning'>" + recordLine + "</span>";
            }
            formattedContent = formattedContent + recordLine + "<br />";
        } else {
            formattedContent = formattedContent + line + "<br />";
        }
    }
    $("#emaf_formattedContents").html(formattedContent);
};
